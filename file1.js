"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];


function isOnlyWhitespace(val) {
  return typeof val === "string" && val.trim() === "";
}

function numericValidity(original) {
  // explicit invalid cases per instructions:
  if (original === "NaN") return false;
  if (isOnlyWhitespace(original)) return false;
  // "100px" -> NaN by Number() already
  const n = Number(original);
  return Number.isFinite(n);
}

const validNumeric = [];
const invalidNumeric = [];
const conversions = []; // detailed per-item conversions

apiData.forEach((item, index) => {
  // Conversions to three forms:
  let asNumber = Number(item);
  // Boolean conversion: per JS rules
  let asBoolean = Boolean(item);
  // String conversion:
  let asString = String(item);

  // Record conversions
  conversions.push({
    index,
    original: item,
    number: asNumber,
    boolean: asBoolean,
    string: asString,
    numericValid: numericValidity(item),
  });

  // Classification
  if (numericValidity(item)) {
    validNumeric.push({ original: item, number: asNumber });
  } else {
    invalidNumeric.push({ original: item, number: asNumber });
  }
});

// Print detailed report with loops and conditional formatting:
console.log("=== Q1: Dynamic Data Parser Report ===");
for (const entry of conversions) {
  const validMark = entry.numericValid ? "✓ VALID" : "✗ INVALID";
  console.log(
    `#${entry.index} original: ${JSON.stringify(entry.original)} -> Number: ${entry.number}, Boolean: ${entry.boolean}, String: "${entry.string}" [${validMark}]`
  );
}
console.log("\nValid numeric entries:");
validNumeric.forEach((v, i) => {
  console.log(`${i + 1}. original: ${JSON.stringify(v.original)} => ${v.number}`);
});
console.log("\nInvalid numeric entries (skipped for numeric processing):");
invalidNumeric.forEach((v, i) => {
  console.log(`${i + 1}. original: ${JSON.stringify(v.original)} => Number() -> ${v.number}`);
});

console.log("=== End of Q1 ===");
