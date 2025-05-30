/**
 * Promise is an object. It is created by wrapping async
 * code.
 * "I promise to return a value"
 *
 * A promise object is either resolved(successfull)
 * or rejected.
 * It is created using following template
 * new Promise((resolve,reject)=>{async code})
 *
 * .then(value=>console.log(value)) is used to to print resolved msg
 * .catch(error=> console.error(error)) is used to catch rejection msg.
 *
 * Promise Chaining is alternative to callback hell.
 */

/**
 * Let's do these Chores
 * 1. Take a Bath
 * 2. Bring Food
 * 3. Start Studying
 */

function takeBath() {
  return new Promise((resolve, reject) => {
    let bathTaken = true;
    if (bathTaken) {
      resolve("Took a Bath!!🛁");
    } else {
      resolve("Didn't Took a Bath!!😨");
    }
  });
}

function bringFood() {
  return new Promise((resolve, reject) => {
    let broughtFood = true;
    if (broughtFood) {
      resolve("Food has been brought!! 🍇");
    } else {
      reject("Food has not been brought!! 🍴");
    }
  });
}

function startStudying() {
  return new Promise((resolve, reject) => {
    let startedStudying = false;
    if (startedStudying) {
      resolve("Started Studying!! 🏫");
    } else {
      reject("Has not started studying!! 💉");
    }
  });
}

// Let's chain functions to create order of execution

takeBath()
  .then((value) => {
    console.log(value);
    return bringFood();
  })
  .then((value) => {
    console.log(value);
    return startStudying();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.error(error));
