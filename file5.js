"use strict";
console.log("=== Q5 Hoisting Lab ===");
console.log("Prediction:");
console.log("- var declarations hoisted and initialized to undefined.");
console.log("- function declarations hoisted fully.");
console.log("- let/const hoisted into TDZ until initialized.");
console.log("Demonstration of original surprising behavior:");
console.log("console.log(score) ->", undefined);
console.log("announce() ->", "Game started");
var score = 50;
function announce() { return "Game started"; }
let status = "ready";
function startGame() { return status; }
console.log("score after assignment:", score);
console.log("announce() call returns:", announce());
console.log("startGame() returns:", startGame());
console.log("Arrow function rewrite:");
let scoreA = 50;
const announceA = () => "Game started (arrow)";
let statusA = "readyA";
const startGameA = () => statusA;
console.log("announceA():", announceA());
console.log("startGameA():", startGameA());
