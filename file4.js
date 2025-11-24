"use strict";

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function () {
    console.log(`Car: ${this.brand} - ${this.model}`);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Tesla", "Model S");

car1.getDetails();
car2.getDetails();
