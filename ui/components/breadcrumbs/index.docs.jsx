/*
Copyright (c) 2015, lifelock.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of lifelock.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const ComponentDocs = require('app_modules/site/components/page/component/docs');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;
const CodeClass = require('app_modules/site/components/code-class');

module.exports = (
  <ComponentDocs>
    <p className="site-text-introduction">Use breadcrumbs to note the path of a record and help the user to navigate back to the parent.</p>
    <p>Breadcrumbs are typically constructed with an <code>ol</code> because their order matters. You mark up breadcrumbs with classes from the horizontal list utility. When you add  the <CodeClass className="breadcrumb" /> class, the separators are automatically generated.</p>
    <h4 className="site-text-heading--label">Accessibility</h4>
    <p>Place the breadcrumb in a nav element with <code>role="navigation"</code>. The first element inside is a paragraph element with the words “You are here.” Mark up the paragraph element with the <CodeClass className="assistive-text" /> class to visually hide it. It also requires an <code>id</code> to associate it to the <code>ol</code> containing the <code>aria-labelledby</code> attribute.</p>
  </ComponentDocs>
);
