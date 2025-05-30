/**
 * async - makes a function to return a promise
 * await- makes an async function to wait for a promise
 *
 * async and await are used in tandom to organize
 * async code blocks in a more convinient and synchronous manner
 *
 *
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
    let startedStudying = true;
    if (startedStudying) {
      resolve("Started Studying!! 🏫");
    } else {
      reject("Has not started studying!! 💉");
    }
  });
}

//No need of promise chaining
async function doTasks() {
  let takeBathResult = await takeBath();
  console.log(takeBathResult);

  let bringFoodResult = await bringFood();
  console.log(bringFoodResult);

  let startStudyingResult = await startStudying();
  console.log(startStudyingResult);
}

doTasks();
