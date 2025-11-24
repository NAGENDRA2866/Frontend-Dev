"use strict";

const user = {
    name: "Nagendra",
    showName: () => {
        console.log("Using Arrow:", this.name);
    }
};

user.showName();

const userFixed = {
    name: "Nagendra",
    showName() {
        console.log("Using Normal Function:", this.name);
    }
};

userFixed.showName();
