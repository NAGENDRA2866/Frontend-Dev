"use strict";
console.log("=== Q4 Debugging Mystery ===");
console.log("Problem: assigning to undeclared variable in strict mode causes ReferenceError");
function showMessageFixed() {
  let greeting = "Welcome";
  console.log(greeting);
  const watch = { greeting };
  debugger;
  return watch;
}
const w = showMessageFixed();
console.log("Returned watch object:", w);
