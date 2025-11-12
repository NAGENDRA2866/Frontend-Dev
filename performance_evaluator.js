// Academic Performance Evaluator
let marks = [85, 90, 80, 95, 88]; // marks for 5 subjects
let totalMarks = marks.reduce((sum, val) => sum + val, 0);
let average = totalMarks / marks.length;

// Validation: if any subject < 35 → Detained
if (marks.some(m => m < 35)) {
  console.log("Detained (Failed in one or more subjects)");
} else {
  if (average >= 85) {
    console.log("Promoted with Distinction");
  } else if (average >= 50) {
    console.log("Promoted");
  } else {
    console.log("Detained");
  }
}
