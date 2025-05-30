let nums = [1, 4, 5, 3, 5];

let total = nums.reduce(sum);
console.log(total);

function sum(accumulator, element) {
  return accumulator + element;
}
