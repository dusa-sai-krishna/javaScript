/**
 * Destructuring provides an elegant way to extract
 * values from arrays - using []
 * properties from objects- using {}
 */

//Array Destructuring

//1. Swap variables
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

//2. Swap values within an array

let colors = "red yellow green violet blue".split(" ");

[colors[0], colors[1]] = [colors[1], colors[0]];

console.log(colors);

//3. Assigning to variables.

let [c1, c2, c3, ...otherColors] = colors;

console.log(c1);
console.log(c2);
console.log(otherColors);

//--------------------------------------------------
