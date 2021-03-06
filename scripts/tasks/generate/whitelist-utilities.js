/*
Copyright (c) 2015, lifelock.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of lifelock.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import path from 'path';

import _ from 'lodash';
import gulp from 'gulp';
import gutil from 'gulp-util';
import through from 'through2';
import css from 'css';
import { allowPrefixedClasses, fixParenthesized, onlyClasses,
        removeAttrs, removeNonWordSuffix,
        removePrefix, removePseudo, splitParts } from './util';

const CSS_SOURCE = path.resolve(__PATHS__.generated, 'utilities.css');
const COMPONENTS_MAP = path.resolve(__PATHS__.generated, 'ui.js');
let componentsClassMap = null;
function removeComponentsClasses (x) {
  return !componentsClassMap[x];
}

function getComponentAndFlavorClassesMap() {
  if (componentsClassMap) return componentsClassMap;

  componentsClassMap = {};
  const ui = require(COMPONENTS_MAP);
  (ui || []).forEach(entry => {
    if (entry.id === 'components' && entry.components) {
      entry.components.forEach(comp => {
        const base = comp.classBase;
        if (base) {
          componentsClassMap[`.${base}`] = true;
          (comp.flavors || []).forEach(flav => {
            componentsClassMap[`.${flav.classBase || base}--${flav.id}`] = true;
          });
        }
      });
    }
  });

  return componentsClassMap;
}

function getSelectors(r) {
  if (r.rules) {
    return r.rules.map(getSelectors);
  }
  return (r.selectors || [])
    .filter(allowPrefixedClasses)
    .map(removePrefix)
    .map(removePseudo)
    .map(removeAttrs)
    .map(fixParenthesized)
    .map(splitParts);
}

export default function(done) {
  console.log('Generating utilities whitelist');

  getComponentAndFlavorClassesMap();

  gulp.src(CSS_SOURCE)
  .pipe(through.obj(function(file, enc, next) {
    const contents = file.contents.toString();
    const parsedCSS = css.parse(contents);
    const rs = parsedCSS.stylesheet.rules.map(getSelectors);
    const rules = _.sortBy(_.uniq(
      _.compact(_.flattenDeep(rs))
      .map(removeNonWordSuffix)
      .filter(onlyClasses)
      .filter(removeComponentsClasses)
      ));
    try {
      const file = new gutil.File({
        path: 'whitelist-utilities.js',
        contents: new Buffer(`export default ${JSON.stringify(rules)}`)
      });
      next(null, file);
    } catch(e) { next(e); }
  }))
  .on('error', done)
  .pipe(gulp.dest(__PATHS__.generated))
  .on('error', done)
  .on('finish', done);
}
