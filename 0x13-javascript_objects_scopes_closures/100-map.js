#!/usr/bin/node

import.list = [1, 2, 3, 4, 5];
const arr = require('./100-data').list;
exports.list = [ 0, 2, 6, 12, 20 ];
console.log(arr);
console.log(arr.map((x, idx) => x * idx));
