"use strict";
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];
const processed = [];
console.log("=== Q2 Employee Bonus Calculator ===");
employees.forEach((emp, idx) => {
  try {
    if (!emp || typeof emp !== "object") throw new Error(`Employee entry invalid at index ${idx}`);
    if (!("name" in emp) || !("salary" in emp) || !("years" in emp)) throw new Error(`Missing property for employee at index ${idx}`);
    const name = emp.name;
    const salary = Number(emp.salary);
    const years = Number(emp.years);
    if (!Number.isFinite(salary)) throw new TypeError(`Invalid salary for ${name}`);
    if (!Number.isFinite(years)) throw new TypeError(`Invalid years for ${name}`);
    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
    console.log(`Employee: ${name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)}`);
    processed.push({ name, salary, years, bonus });
  } catch (err) {
    console.log(`Error processing employee at index ${idx} -> ${err.name}: ${err.message}`);
  }
});
console.log("Summary processed count:", processed.length);
