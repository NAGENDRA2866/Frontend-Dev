"use strict";

function validateLogin() {
    const user = document.getElementById("username");
    const pass = document.getElementById("password");

    const userPattern = /^.{5,}$/;
    const passPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W]).{8,}$/;

    if (!userPattern.test(user.value)) {
        console.log("Username must be at least 5 characters");
        return;
    }

    if (!passPattern.test(pass.value)) {
        console.log("Password must contain uppercase, lowercase, number & special character");
        return;
    }

    console.log("Login successful!");
}
