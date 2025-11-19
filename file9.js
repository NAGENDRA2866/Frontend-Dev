"use strict";
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];
const clean = [];
const errors = [];
console.log("=== Q9 JSON Audit ===");
rawData.forEach((line, idx) => {
  try {
    let parsed;
    try {
      parsed = JSON.parse(line);
    } catch (p) {
      throw new SyntaxError(`Invalid JSON at line ${idx}`);
    }
    if (!("user" in parsed)) throw new Error(`Missing key 'user' at line ${idx}`);
    if (!("age" in parsed)) throw new Error(`Missing key 'age' at line ${idx}`);
    const ageNum = Number(parsed.age);
    if (!Number.isFinite(ageNum)) throw new TypeError(`Invalid age at line ${idx}`);
    clean.push({ user: parsed.user, age: ageNum, line: idx });
  } catch (err) {
    errors.push({ line: idx, name: err.name, message: err.message });
    console.log(`Error line ${idx}: ${err.name} - ${err.message}`);
  }
});
console.log("Clean entries:");
clean.forEach(c => console.log(`- ${c.user} (${c.age}) from line ${c.line}`));
console.log("Under 18 users:");
const under18 = clean.filter(c => c.age < 18);
if (under18.length === 0) console.log("None");
else under18.forEach(u => console.log(`- ${u.user} (${u.age})`));
console.log("Errors summary:");
errors.forEach(e => console.log(`- line ${e.line}: ${e.name} - ${e.message}`));
