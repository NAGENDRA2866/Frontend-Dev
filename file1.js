"use strict";

// Product class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply percentage discount on price
    applyDiscount(percent) {
        this.price = this.price - (this.price * (percent / 100));
    }

    // Show details in formatted text
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

// Creating multiple product objects
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Bag", 950, "Accessories"),
    new Product(3, "Phone", 35000, "Electronics"),
    new Product(4, "Shoes", 1800, "Footwear")
];

// Apply discount to one product
products[0].applyDiscount(10);

// Filter and display products price > 1000
const filteredProducts = products.filter(p => p.price > 1000);

console.log("Products priced above 1000:");
filteredProducts.forEach(p => console.log(p.getDetails()));
