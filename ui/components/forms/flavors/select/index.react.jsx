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

class Component extends React.Component {
  constructor(props) {
    super(props);
    componentUtil.install(this);
  }
  render() {
    const className = this.$getClassName(pf('select'));
    return (
      <div className={pf('form-element')}>
        <label className={pf('form-element__label')} htmlFor={this.props.assistiveText.replace(' ','-')}>{this.props.label}</label>
        <div className={pf('form-element__control')}>
          <div className={pf('select_container')}>
            <select id={this.props.assistiveText.replace(' ','-')} className={className}>
              {this.props.children}
            </select>
          </div>
          {this.renderHelp(this.props.help)}
        </div>
      </div>
    );
  }
  renderHelp(help) {
    if (!help) return null;
    const className = this.$getClassName(pf('form-element__help'));
    return (
      <div className={className}>
        {help}
      </div>
    );
  }
}

Component.displayName = 'Select';
Component.propTypes = {
  label: React.PropTypes.node.isRequired,
  assistiveText: React.PropTypes.string.isRequired,
  help: React.PropTypes.node
};

module.exports = Component;
