/*
Copyright (c) 2015, lifelock.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of lifelock.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const Checkbox = require('ui/components/forms/flavors/checkbox/index.react');
const Radio = require('ui/components/forms/flavors/radio/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

module.exports = (
<div className='demo-only'>
  <form className={pf('form--stacked')}>
    <div className={pf('form-element has-error is-required')}>
      <label className={pf('form-element__label')} htmlFor="email-0-1">Input Error</label>
      <div className={pf('form-element__control')}>
        <input id="email-0-1" className={pf('input')} type="email" aria-describedby="errorSample1" required />
        <span id="errorSample1" className={pf('form-element__help')}>This field is required</span>
      </div>
    </div>
    <div className={pf('form-element has-error is-required')}>
      <label className={pf('form-element__label')} htmlFor="email-0-2">Input Error with Icon Left</label>
      <div className={pf('form-element__control')}>
        <div className={pf('input-has-icon input-has-icon--left')}>
          <SvgIcon className={pf('icon input__icon icon-text-error')} sprite="utility" symbol="warning" />
          <input id="email-0-2" className={pf('input')} type="email" aria-describedby="errorSample1" required />
        </div>
        <span id="errorSample1" className={pf('form-element__help')}>This field is required</span>
      </div>
    </div>
    <div className={pf('form-element has-error is-required')}>
      <Checkbox label="Checkbox Error" assistiveText="errorSample2" />
        <span id="errorSample2" className={pf('form-element__help')}>This field is required</span>
    </div>
    <div className={pf('form-element has-error is-required')}>
      <Radio label="Radio Error" assistiveText="errorSample3" />
        <span id="errorSample3" className={pf('form-element__help')}>This field is required</span>
    </div>
  </form>
</div>
);
