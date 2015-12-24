/*
Copyright (c) 2015, lifelock.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of lifelock.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const SvgIcon = require('app_modules/ui/svg-icon');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

exports.preview = (
  <div className='demo-only'>
    <span className={pf('icon__container m-right--small')}>
      <SvgIcon className={pf('icon icon-text-warning icon--x-small')} sprite="utility" symbol="warning" />
      <span className={pf('assistive-text')}>Warning Icon</span>
    </span>
    <span className={pf('icon__container m-right--small icon-standard-account')}>
      <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="account" />
      <span className={pf('assistive-text')}>Standard Account Icon</span>
    </span>
    <span className={pf('icon__container m-right--small icon-standard-case')}>
      <SvgIcon className={pf('icon')} sprite="standard" symbol="case" />
      <span className={pf('assistive-text')}>Small Case Icon</span>
    </span>
    <span className={pf('icon__container icon-standard-solution')}>
      <SvgIcon className={pf('icon icon--large')} sprite="standard" symbol="solution" />
      <span className={pf('assistive-text')}>Large Solution Icon</span>
    </span>
  </div>
);
exports.code = (
  <div className='demo-only'>
    <span className={pf('icon__container')}>
      <SvgIcon className={pf('icon icon-text-warning icon--x-small')} sprite="utility" symbol="warning" />
      <span className={pf('assistive-text')}>Warning Icon</span>
    </span>
    <span className={pf('icon__container icon-standard-account')}>
      <SvgIcon className={pf('icon icon--small')} sprite="standard" symbol="account" />
      <span className={pf('assistive-text')}>Standard Account Icon</span>
    </span>
    <span className={pf('icon__container icon-standard-case')}>
      <SvgIcon className={pf('icon')} sprite="standard" symbol="case" />
      <span className={pf('assistive-text')}>Small Case Icon</span>
    </span>
    <span className={pf('icon__container icon-standard-solution')}>
      <SvgIcon className={pf('icon icon--large')} sprite="standard" symbol="solution" />
      <span className={pf('assistive-text')}>Large Solution Icon</span>
    </span>
  </div>
);