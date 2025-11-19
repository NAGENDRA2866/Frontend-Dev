// Generate 8 scores between 30 and 100
let scores = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 71) + 30
);

// Highest & lowest
let highest = Math.max(...scores);
let lowest = Math.min(...scores);

// Average
let average = scores.reduce((a, b) => a + b, 0) / scores.length;

// Passed (>=50)
let passed = scores.filter(s => s >= 50).length;

console.log("Scores:", scores);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Passed Students: ${passed}`);
