"use strict";

let bankItem = `
<div class="">
</div>
`;

class CrediBorg {
  init(apiKey) {
    this.apiKey = apiKey;
    let div = document.querySelector('#crediborg');
    div.innerHTML = 'Hello from NPM';
  }
}

let crediborg = new CrediBorg();

exports.init = crediborg.init;