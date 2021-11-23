//Module - Encapsulated code (only share minimum)
//node uses Commonjs, every file in node is module
const names = require('./04-name');
const sayHi = require('./05-utils');

sayHi("hari bahadur")
sayHi(names.john)
sayHi(names.dev)