// importing file Commonjs module

const bookList = require("./1-module");
console.log("Hello world for book list", bookList);

// lets talk about es6 module difference between module rapper function

// lets talk about module wrapper function
//https://stackoverflow.com/questions/51349900/what-does-mean-by-node-module-wrapper-function-in-node

//nodesjs wrapp function in functin autmatically, 

(function(exports, require, module, __filename, __dirname) {
    // Module code actually lives in here 
});