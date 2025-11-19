"use strict";

function bookTicket() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const seats = document.getElementById("seats");

    const namePattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const seatPattern = /^[1-9]|10$/;

    if (!namePattern.test(name.value) ||
        !emailPattern.test(email.value) ||
        !seatPattern.test(seats.value)) {
        console.log("Validation failed");
        return;
    }

    const booking = {
        name: name.value,
        email: email.value,
        seats: seats.value
    };

    console.log("Ticket Booked:", booking);
}
