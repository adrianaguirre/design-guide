/*
Copyright (c) 2015, lifelock.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of lifelock.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import path from 'path';
import fs from 'fs';

import gulp from 'gulp';
import gutil from 'gulp-util';
import through from 'through2';
import theo from 'theo';

import _ from 'lodash';

import {
  addContrastRatios,
  addPxValue
} from 'app_modules/util/tokens';

/**
 * Compile the design tokens to be displayed on the site
 *
 * @param {function} done
 */
export default function(done) {

  console.log('Compiling Design Tokens');

  const releaseGroups = [
    {
      name: 'salesforce-1-lightning',
      label: 'LifeLock Design',
      sets: ['force-base', 'force-mq-commons', 's1-base', 's1-base-medium', 's1-base-large']
    }
  ];
  const releaseNames = ['winter-16'];
  const releases = [];
  const releaseStream = through.obj();

  releaseNames.forEach(name => {
    const release = {
      name,
      groups: releaseGroups.map(group => _.merge({}, group, { release: name }))
    };
    releases.push(release);
    releaseStream.write(release);
  });

  releaseStream.end();

  /**
   * Convert a transformed design tokens file into a set object
   */
  function transformSet(file, enc, next) {
    try {
      const setName = _.kebabCase(path.basename(file.path, '.json'));
      const set = {
        name: setName,
        contents: JSON.parse(file.contents.toString())
      };
      // Accessibility
      addContrastRatios(set.contents);
      // Add px values as well as rem
      _.forEach(set.contents.props, prop => {
        if (/rem$/.test(prop.value)) {
          addPxValue(prop);
        }
      });
      return next(null, set);
    } catch(err) {
      return next(err);
    }
  }

  /**
   * Transform the token files for a given release and push them into the
   * "sets" property of the release object
   */
  function transformGroup(group, enc, next) {
    const sets = [];
    const src = group.sets.map(set => {
      return path.resolve(__PATHS__.git_modules, `design-tokens-${group.release}`, `tokens/${set}.json`);
    });
    gulp.src(src)
      .on('error', next)
      .pipe(theo.plugins.transform('web', {
        includeMeta: true,
        includeRawValue: true
      }))
      .on('error', done)
      .pipe(through.obj(transformSet))
      .on('error', done)
      .pipe(through.obj(
        function(set, enc, next) {
          sets.push(set);
          next();
        },
        function(next) {
          group.sets = sets;
          delete group.release;
          this.push(group);
          next();
        }
      ))
      .on('error', next)
      .on('finish', next);
  }

  /**
   * Transform all releases and output the result
   */
  releaseStream
    .pipe(through.obj(function(release, enc, next) {
      release.groups.forEach(group => {
        this.push(group);
      });
      next();
    }))
    .pipe(through.obj(transformGroup))
    .on('error', done)
    .on('finish', () => {
      const stream = through.obj();
      const module = `export default ${JSON.stringify(releases, null, 2)};`;
      stream.write(new gutil.File({
        path: 'ui.tokens.js',
        contents: new Buffer(module)
      }));
      stream.end();
      stream
        .pipe(gulp.dest(__PATHS__.generated))
        .on('error', done)
        .on('finish', done);
    });

}
