#!/usr/bin/node

import.list = [1, 2, 3, 4, 5];
const arr = require('./100-data').list;

console.log(arr);
console.log(arr.map((x, idx) => x * idx));
