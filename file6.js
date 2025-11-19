"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * (percent / 100);
    }
}

// Create employees
const employees = [
    new Employee(1, "John", "IT", 50000),
    new Employee(2, "Sara", "HR", 45000),
    new Employee(3, "David", "Finance", 55000),
    new Employee(4, "Riya", "IT", 52000),
    new Employee(5, "Arjun", "Sales", 48000)
];

// Annual salaries
employees.forEach(e => console.log(e.name, e.getAnnualSalary()));

// Total company payout
const total = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
console.log("Total Company Annual Payout:", total);
