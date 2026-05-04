require('./xyz.js') // call one module in to another
const obj = require('./sum.js');

var name = "Namaste NodeJS";

var a = 10;
var b = 20;

obj.calculateSum(a,b)

console.log(obj.x);