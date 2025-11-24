const menu = {
    pizza: 250,
    burger: 150,
    fries: 80,
    coke: 50
};

function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(i => {
            if (!menu[i]) throw new Error("Invalid item: " + i);
            return menu[i];
        });

        return prices.reduce((a, b) => a + b, 0);

    } catch (err) {
        return err.message;
    }
}

console.log(calculateBill(["pizza", "coke"]));
console.log(calculateBill(["pizza", "icecream"]));
