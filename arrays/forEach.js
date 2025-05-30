let nums = [1, 2, 3, 4, 5];
nums.forEach(double);
console.log(nums);

function double(element, index, array) {
  array[index] = element * 2;
}
