"use strict";

function applyOperation(numbers, operation) {
    const result = [];
    for (let num of numbers) {
        result.push(operation(num));
    }
    return result;
}

const numbers = [1, 2, 3, 4];

const doubled = applyOperation(numbers, num => num * 2);
console.log("Doubled:", doubled);

const squared = applyOperation(numbers, num => num * 2);
console.log("Squared:", squared);
