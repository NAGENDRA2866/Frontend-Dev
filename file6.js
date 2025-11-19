"use strict";
function generatePyramid(limit = 5) {
  console.log(`Pyramid (limit=${limit}) with let:`);
  for (let i = 1; i <= limit; i++) {
    let row = "";
    for (let j = 0; j < i; j++) row += "* ";
    console.log(row.trim());
  }
}
function generatePyramidVar(limit = 5) {
  console.log(`Pyramid (limit=${limit}) with var:`);
  for (var i = 1; i <= limit; i++) {
    var row = "";
    for (var j = 0; j < i; j++) row += "* ";
    console.log(row.trim());
  }
}
console.log("=== Q6 Pyramid Pattern Generator ===");
generatePyramid(4);
generatePyramidVar(4);
generatePyramid(5);
