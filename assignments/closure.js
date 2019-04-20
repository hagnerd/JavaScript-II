// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// function add(a) {
//  return function(b) {
//    return a + b;
//  }
// }
const add = a => b => a + b;
const subtract = a => b => a - b;
const multiply = a => b => a * b;
const divide = a => b => a / b;

console.log(add(1)(2));
console.log(subtract(10)(3));
console.log(multiply(13)(20));
console.log(divide(110)(11));

let someGlobalState = "Hello, ";

function sayHello(name) {
  return function() {
    console.log(`${someGlobalState}, ${name}`);
  };
}

sayHello("World!");

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 1;
  return () => {
    return count++;
  };
};

let newCounter = counter();
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    }
  };
};

const newNewCounter = counterFactory();
console.log(newNewCounter.increment());
console.log(newNewCounter.increment());
console.log(newNewCounter.decrement());
