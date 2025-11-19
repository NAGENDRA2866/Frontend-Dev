"use strict";
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;
class CalculatorError extends Error { constructor(m){ super(m); this.name="CalculatorError"; } }
class DivideByZeroError extends CalculatorError { constructor(){ super("Division by zero"); this.name="DivideByZeroError"; } }
class NegativeRootError extends CalculatorError { constructor(v){ super(`Root of negative ${v}`); this.name="NegativeRootError"; } }
class InvalidOperationError extends CalculatorError { constructor(op){ super(`Invalid operation ${op}`); this.name="InvalidOperationError"; } }
function smartCalc(op, a, b) {
  switch (op) {
    case "add": return a + b;
    case "subtract": return a - b;
    case "divide": if (b === 0) throw new DivideByZeroError(); return a / b;
    case "power": return Math.pow(a, b);
    case "root": if (a < 0 && b % 2 === 0) throw new NegativeRootError(a); return Math.pow(a, 1 / b);
    default: throw new InvalidOperationError(op);
  }
}
console.log("=== Q7 Smart Calculator ===");
operations.forEach(op => {
  try {
    const res = smartCalc(op, num1, num2);
    console.log(`${op}(${num1}, ${num2}) -> ${res}`);
  } catch (err) {
    console.log(`${op}(${num1}, ${num2}) -> ERROR: ${err.name} - ${err.message}`);
  }
});
console.log("Formatted summary:");
operations.forEach(op => {
  try {
    const res = smartCalc(op, num1, num2);
    console.log(`- ${op.padEnd(8)} : SUCCESS -> ${res}`);
  } catch (err) {
    console.log(`- ${op.padEnd(8)} : ERROR   -> ${err.name} - ${err.message}`);
  }
});
