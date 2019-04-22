/* contained IIFE */
(function(a, b) {
  console.log("I am an iife");
  var internalVar = "I am a secret";

  console.log(a + b);
})(10, 23);
// even though vars are not block scoped, they are function scoped
// IIFE's were an early way to have private data and methods
// in JavaScript. internalVar can only be used within the IIFE above

/*
 * You can capture the return value from the iife
 */
let res = (function(a, b) {
  return a + b;
})(83, 92);

console.log(res);
