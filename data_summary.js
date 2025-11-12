// Multi-Type Data Summary
let name = "Alice";
let age = 25;
let isStudent = true;
let hobbies = ["Reading", "Music"];
let address = { city: "Hyderabad", zip: 500001 };
let nothing = null;
let notAssigned;

let data = [
  { Label: "Name", Value: name, Type: typeof name },
  { Label: "Age", Value: age, Type: typeof age },
  { Label: "isStudent", Value: isStudent, Type: typeof isStudent },
  { Label: "Hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { Label: "Address", Value: address, Type: typeof address },
  { Label: "Nothing", Value: nothing, Type: typeof nothing },
  { Label: "NotAssigned", Value: notAssigned, Type: typeof notAssigned },
];

console.table(data);
