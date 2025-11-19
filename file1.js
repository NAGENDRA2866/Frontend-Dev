// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;

    if (isPermanent) {
        salary += bonus;      // Add global bonus
    }

    console.log(`Total Salary = ${salary}`);
}

// Test calls
calculateSalary(true);   // With bonus
calculateSalary(false);  // No bonus

console.log("Global bonus remains:", bonus);
