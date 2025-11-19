"use strict";

let user = { name: "John", email: "john@mail.com", age: 21 };

function updateUser() {
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = document.getElementById("age").value;

    document.getElementById("result").textContent = JSON.stringify(user, null, 2);
}
