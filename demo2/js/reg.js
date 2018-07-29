//ES6写法
import {open} from './base';

//node写法
// var base = require('./base');
//
// var open = base.open;

if (open) {
    document.body.innerHTML =
        `<h1>欢迎入坑</h1>`
} else {
    document.body.innerHTML =
        `<h1>暂不接受入坑</h1>`
}