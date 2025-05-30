/**
 * Date is a class used to create Date Time objects.
 */

/**
 * Creating a Date Time object
 */

//1. Passing Arguments Y,M,D,H,Min,Sec,Ms
const d1 = new Date(2025, 6, 10, 13, 25, 16);
console.log(d1);

//2. Passing as String -> Date using"-" and time use ":" as delimiters
const d2 = new Date("2025-05-29T18:05:10");
console.log(d2);

/**
 * Getters and setters
 */

const now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth()); // January -> 0
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getDay()); // day of Week Sunday->0

const d3 = new Date();

d3.setFullYear(2025);
d3.setMonth(4); // May Zero based indexing
d3.setDate(29);

console.log(d3);
