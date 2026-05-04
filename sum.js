// Modules protects their variables and functions from leaking

console.log("Sum Module Executed");
var x = 10;
function calculateSum(a,b){
    const sum = a + b;

    console.log(sum)
}

module.exports = {
    x : x,
    calculateSum : calculateSum
};