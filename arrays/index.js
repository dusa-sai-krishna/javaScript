let fruits = ["apple", "mango", "banana"];

// indxexing starts from zero
console.log(fruits[0]);

// Delete elements at start
fruits.shift();
console.log(fruits);

// delte elements at end
fruits.pop();
console.log(fruits);

// insert elements at start , end
fruits.unshift("apple");
fruits.push("banana");
console.log(fruits);

//length property of js arrays
console.log(`Length of fruits array is ${fruits.length}`);

// finding index of an element, not found returns -1
console.log(`Index of mango in fruits is ${fruits.indexOf("mango")}`);
console.log(`Index of mango in fruits is ${fruits.indexOf("apricot")}`);

//enhanced for loop to iterate over elements
for (let fruit of fruits) {
  console.log(fruit);
}

// sorting
console.log(`Sorted fruits: ${fruits.sort()}`);
console.log(`Reverse Sorted fruits: ${fruits.sort().reverse()}`);
