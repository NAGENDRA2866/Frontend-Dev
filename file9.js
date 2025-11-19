"use strict";

class Cart {
    constructor() {
        this.items = [];
        this.discount = 0;
    }

    addItem(name, price, qty) {
        this.items.push({ name, price, qty });
    }

    applyCoupon(code) {
        const pattern = /^(SAVE|DISC)(\d{1,2})$/;

        if (!pattern.test(code)) {
            console.log("Invalid coupon");
            return;
        }

        this.discount = Number(code.match(/\d+/)[0]); // extract digits
    }

    getTotal() {
        let sum = this.items.reduce((s, i) => s + (i.price * i.qty), 0);
        return sum - (sum * this.discount / 100);
    }
}

// Example
const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);

cart.applyCoupon("SAVE20");

console.log("Final Total:", cart.getTotal());
