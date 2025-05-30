/**
 * It is a function which is defined inside another function.
 * Inner function has the access to all variables of
 * outer function.
 * Allows for private variables and state maintainence.
 */

/**
 * Requirement explanation using a counter program.
 */

/**
 * Without closure
 */
let count = 0;

// But I can access the count variable and modify it illegaly
count = 100000;

function increment() {
  count++;
  console.log(`Count incremented to ${count}`);
}

increment();
increment();

/**
 * Now I want to make sure count variable is not accessed
 * So let's wrap around a function.
 * If I wrap the increment() and count around a function
 * How to access the increment().
 * So let's return the increment directly as callback.
 * But most times, we create multiple inner functions
 * and the best practice regarding closures is to
 * wrap the callbacks in curly braces and return as
 * and object. So
 *
 *
 * Counter program with closures.
 */

function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count incremented to ${count}`);
  }

  //   return {increment:increment} use shortcut below
  return { increment };
}

let counter = createCounter();
counter.increment();
counter.increment();

/**
 *
 * Counter with increment and decrement functionality
 */

function createAdvancedCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count incremented to ${count}`);
  }

  function decrement() {
    count--;
    console.log(`Count decremented by ${count}`);
  }

  return { increment, decrement };
}

let aCounter = createAdvancedCounter();

aCounter.increment();
aCounter.decrement();
