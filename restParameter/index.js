/**
 Used to bundle bunch of values into an array
 Mainly used with functions

 */

function add(...nums) {
  let sum = 0;
  for (let val of nums) {
    sum += val;
  }
  return sum;
}

console.log(add(1, 2, 3, 4, 5, 6));
