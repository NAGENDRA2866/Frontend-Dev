"use strict";

function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    // RegExp patterns
    const namePattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{10}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).{6,}$/;

    validate(name, namePattern, "Name must contain alphabets only");
    validate(email, emailPattern, "Invalid email format");
    validate(phone, phonePattern, "Phone must be 10 digits");
    validate(password, passwordPattern, "Password must have 1 uppercase, 1 number & 1 special character");
}

function validate(input, pattern, msg) {
    const error = input.nextElementSibling;
    if (!pattern.test(input.value)) {
        input.style.border = "2px solid red";
        error.textContent = msg;
    } else {
        input.style.border = "2px solid green";
        error.textContent = "";
    }
}
