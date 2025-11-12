// Employee Salary Projection
let currentSalary = 40000;
let incrementRate = 10; // in percent

let salaryTable = [];

for (let year = 1; year <= 5; year++) {
  currentSalary += (currentSalary * incrementRate) / 100;
  salaryTable.push({ Year: year, "Projected Salary": Math.round(currentSalary) });
}

console.table(salaryTable);
