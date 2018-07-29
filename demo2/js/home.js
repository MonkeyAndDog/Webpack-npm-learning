// var base = require('./base');
//
// var open = base.open;

import {open} from './base';

console.log(open);

if (open) {
    document.body.innerHTML =
        `<a href="reg.html">注册</a>`
}