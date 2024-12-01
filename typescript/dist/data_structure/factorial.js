"use strict";
function factorial(n) {
    let fact = 1;
    while (n > 0) {
        fact *= n--;
    }
    return fact;
}
console.log(factorial(5));
