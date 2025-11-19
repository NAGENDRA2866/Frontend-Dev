let feedback = "Great product! Fast delivery and amazing sound quality!";

// Word count
let wordCount = feedback.split(" ").length;

// Check negativity
if (feedback.toLowerCase().includes("bad") ||
    feedback.toLowerCase().includes("poor")) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}

console.log("Word Count:", wordCount);
