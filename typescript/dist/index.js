"use strict";
let x = 1; //type inferencing
let y = 1;
function greetUser(firstName) {
    return "Hello " + firstName;
}
console.log(greetUser("Puneet"));
function delayedCall(anotherFn) {
    setTimeout(anotherFn, 1000);
}
function greet(name) {
    console.log("Hello " + name);
}
