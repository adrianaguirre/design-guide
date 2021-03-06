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

module.exports = (
  <div className='demo-only demo-visibility'>

    <div className={pf('x-small-show')}>Show on 320px and up</div>
    <div className={pf('x-small-show-only')}>Show only between 320px and 479px</div>
    <div className={pf('max-x-small-hide')}>Hide on 319px and down</div>

    <div className={pf('small-show')}>Show on 480px and up</div>
    <div className={pf('small-show-only')}>Show only between 480px and 767px</div>
    <div className={pf('max-small-hide')}>Hide on 479px and down</div>

    <div className={pf('medium-show')}>Show on 768px and up</div>
    <div className={pf('medium-show-only')}>Show only between 768px and 1023px</div>
    <div className={pf('max-medium-hide')}>Hide on 1023px and down</div>

    <div className={pf('large-show')}>Show on 1024px and up</div>
  </div>
);
