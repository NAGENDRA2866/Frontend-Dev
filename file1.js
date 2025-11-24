"use strict";


function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function showEndMessage() {
    console.log("Welcome to the course!");
}

greetUser("Nagendra", showEndMessage);
