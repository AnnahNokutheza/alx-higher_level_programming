#!/usr/bin/node


const arr = require('./100-data').list;
exports.list = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.map((x, idx) => x * idx));
