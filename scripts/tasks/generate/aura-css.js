/*
Copyright (c) 2015, lifelock.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of lifelock.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import path from 'path';
import gulp from 'gulp';

export default function (designSystem, done) {
  console.log('Compiling Aura CSS');
  let generatedPath = path.resolve(__PATHS__.generated, 'aura/css');
  let generatedPathDev = path.resolve(generatedPath, '_dev');
  try {
    designSystem.generateCSS(generatedPath);
    designSystem.generateCSS(generatedPathDev, {
      filter: flavor => flavor.status === 'dev-ready'
    });
  } catch (e) {
    return done(e);
  }
  gulp.src(path.resolve(generatedPath, '**/*'), {
    base: generatedPath
  })
  .pipe(gulp.dest(path.resolve(__PATHS__.www, 'assets/downloads/aura/css')))
  .on('error', done)
  .on('finish', done);
}
