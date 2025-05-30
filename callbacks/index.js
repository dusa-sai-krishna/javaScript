/**
 callback is the technique to pass a function as
 an argument to another function.
 This is used to handle async operations like
    - Reading a file
    - Database operations.

    " Hey call this after you complete the execution"

    We only pass the name no the with (). 
    If passed with () then the function gets 
    called immediatly
 */

hello(goodbye);

function hello(callback) {
  //imitating a process which takes time to complete
  setTimeout(() => console.log("Hello World"), 3000);
  callback();
}

function goodbye() {
  console.log("Good Bye!!");
}
