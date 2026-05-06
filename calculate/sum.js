// Modules protects their variables and functions from leaking

console.log("Sum Module Executed");
var x = "Hello World";

// ESModule Export Example
function calculateSum(a, b) {
  const sum = a + b;

  console.log(sum);
}

//CommonJS Module Export Example
module.exports = {
  x,
  calculateSum,
};
