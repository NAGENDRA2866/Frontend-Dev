let product = " wireless headphones PRO ";

// Trim spaces
let cleaned = product.trim().toLowerCase();

// Capitalize each word
cleaned = cleaned
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace 'Pro' with 'Pro Edition'
cleaned = cleaned.replace("Pro", "Pro Edition");

console.log("Formatted Title:", cleaned);
console.log("Length:", cleaned.length);
