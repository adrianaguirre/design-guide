/*
Copyright (c) 2015, lifelock.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of lifelock.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const ReactDOM = require('react-dom');
const Modal = require('ui/components/modals/index.react');
const Button = require('ui/components/buttons/index.react');
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const Lorem = require('react-lorem-component');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

class ModalExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showing: true, saving: false, edit: false};
  }

  openCreateModal() {
    this.setState({showing: true, saving: false, edit: false});
  }

  openEditModal() {
    this.setState({showing: true, saving: false, edit: true});
  }

  closeModal() {
    this.refs.opener.focus();
    this.setState({showing: false, saving: false});
    setTimeout(()=> this.setState({edit: false}), 500);
  }

  saveModal() {
    this.setState({showing: false, saving: true});
    setTimeout(()=> this.setState({saving: false}), 500);
  }

  render() {
    return (
      <div className='demo-only' style={{height: '640px'}}>
        <Modal
          isOpen={this.state.showing}
          renderInline={true}
          saving={this.state.saving}
          edit={this.state.edit}
        >

          <Modal.Header>
            <h2 className={pf('text-heading--medium')}>
              Modal Header
            </h2>
          </Modal.Header>

          <Modal.Body>
            <Lorem count={2} paragraphLowerBound={5} />
          </Modal.Body>

          <Modal.Footer>
            <Button flavor="neutral">Cancel</Button>
            <Button flavor="neutral,brand">Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

module.exports = <ModalExample/>;
