/*
Copyright (c) 2015, lifelock.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of lifelock.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;
const CodeClass = require('app_modules/site/components/code-class');

exports.preview = (
<div className='demo-only demo-container'>
<div>
  <div className={pf('container')}>
    Container
  </div>
  <div className={pf('container--small')}>
    Max Width: 576px
  </div>
  <div className={pf('container--medium')}>
    Max Width: 980px
  </div>
  <div className={pf('container--large')}>
    Max Width: 1210px
  </div>
  <div className={pf('container--fluid')}>
    Width 100%
  </div>
  <div className={pf('container--left container--small')}>
    Left Aligned
  </div>
  <div className={pf('container--center container--small')}>
    Center Aligned
  </div>
  <div className={pf('container--right container--small')}>
    Right Aligned
  </div>
  </div>
</div>
);
exports.code = (
<div className='demo-only demo-container'>
  <div className={pf('container')}>Contents go here.</div>
  <div className={pf('container--small')}>Contents go here.</div>
  <div className={pf('container--medium')}>Contents go here.</div>
  <div className={pf('container--large')}>Contents go here.</div>
  <div className={pf('container--fluid')}>Contents go here.</div>
  <div className={pf('container--left container--small')}>Contents go here.</div>
  <div className={pf('container--center container--small')}>Contents go here.</div>
  <div className={pf('container--right container--small')}>Contents go here.</div>
</div>
);
