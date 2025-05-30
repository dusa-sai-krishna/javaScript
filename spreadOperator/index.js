// ... is spread operator used to
//  unpack elements from an interable
// such as string or an array

// max and min operators
/*
    Max and min methods can take n arguments but not 
    an iterable.
    so to use these methods with an array , we need
    to unpack them first

*/
let nums = [1, 2, 3, 4, 5];
console.log(Math.max(nums)); // returns NaN
console.log(Math.max(...nums)); // 5
console.log(Math.min(...nums));

/**
 It is also used to unpack strings to characters
 */

let str = "Sai Krishna";
//unpacking characters into an array and using .join() of arrays

console.log([...str].join("-"));

/**
 
Used to combine arrays as well
 */

let fruits = "apple banana".split(" ");
let veggies = "tomator bittercourd".split(" ");

let foods = [...fruits, ...veggies];
console.log(foods);
