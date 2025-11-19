"use strict";
console.log("=== Q10 Nested Hoisting and Closures ===");
console.log("Prediction:");
console.log("- outer console.log(count) -> undefined because var count hoisted");
console.log("- inner console.log(count) -> undefined because inner's var count hoisted and shadows outer");
function outer() {
  console.log("outer before var count ->", typeof count !== "undefined" ? count : undefined);
  var count = 5;
  function inner() {
    console.log("inner before var count ->", typeof count !== "undefined" ? count : undefined);
    var count = 10;
    console.log("inner after assign ->", count);
  }
  inner();
  console.log("outer after inner ->", count);
}
outer();
console.log("Arrow inner version:");
function outerArrow() {
  console.log("outerArrow before var count ->", typeof count !== "undefined" ? count : undefined);
  var count = 5;
  const inner = () => {
    console.log("inner (arrow) accesses outer count ->", count);
  };
  inner();
  console.log("outerArrow after inner ->", count);
}
outerArrow();
debugger;
console.log("End of Q10");
