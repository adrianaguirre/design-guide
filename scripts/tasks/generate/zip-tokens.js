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
import zip from 'gulp-zip';
import through from 'through2';
import theo from 'theo';
import _ from 'lodash';
import rimraf from 'rimraf';

//const local = path.resolve.bind(path, __PATHS__.gentokens);

/**
 * Generate each platform's tokens
 *
 * @param {function} done
 */
export default function(done) {
  const releaseNames = ['winter-16'];

  console.log('Zipping Design Tokens');

  var convertOptions = [
      {transform: 'web', format: {zip: 'styl', name: 'styl'} },
      {transform: 'web', format: {zip: 'less', name: 'less'} },
      {transform: 'web', format: {zip: 'scss', name: 'scss'} },
      {transform: 'ios', format: {zip: 'ios', name: 'ios.json'} },
      {transform: 'android', format: {zip: 'android', name: 'android.xml'} }
  ];

  function convert(options) {
    const src = releaseNames.map(name => {
      return path.resolve(__PATHS__.git_modules, `design-tokens-${name}`, 'tokens/*.json');
    });
    gulp.src(src)
      .pipe(theo.plugins.transform(options.transform))
      .on('error', done)
      .pipe(theo.plugins.format(options.format.name))
      .on('error', done)
      .pipe(through.obj(
        function(file, enc, next){
          const result = (/(analytics|marketing)/ig).test(file.path) ? null : file;
          next(null, result);
        }
      ))
      .on('error', done)
      .pipe(zip(`salesforce_design_tokens_${options.format.zip}.zip`))
      .on('error', done)
      .pipe(gulp.dest(path.resolve(__PATHS__.www, 'assets/downloads/design-tokens')))
      .on('error', done);
  }

  convertOptions.forEach(convert);
  done();
}
