// require('./xyz.js') // call one module in to another
// const obj = require('./sum.js');
const {x } = require('./calculate/sum'); // CommonJs Module Imports Example
// import {x, calculateSum } from './sum.js'; // ES Module Imports Example

// const {calculateMultiply} = require('./calculate/multiply');

const {calculateSum , calculateMultiply} = require('./calculate')

const data = require('./data.json');

const util = require('node:util');

console.log(data);

var name = "Namaste NodeJS";

var a = 10;
var b = 20;


calculateSum(a,b)
calculateMultiply(a,b)


console.log(x);