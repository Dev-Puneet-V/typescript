"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
let t = {
    name: "harkirat",
    age: 21,
    department: "abc",
};
let user2 = {
    name: "raman",
    age: 22,
};
const user = {
    name: "Alice",
    age: 25,
};
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.number = "1232312";
    }
    greet(phrase) {
        throw new Error("Method not implemented.");
    }
}
// abstract class
class User1 {
    constructor(name) { this.name = name; }
}
class Employee extends User1 {
    constructor(name) {
        super(name);
        this.name = name;
    }
    greet() {
        return "hi " + this.name;
    }
}
//in interface we cant have a function with default implementation
// Abstract Class
// Definition: A class that cannot be instantiated on its own but serves as a base class.
// Purpose: To provide a partially implemented blueprint for subclasses.
// Supports Implementation: Abstract classes can include both fully implemented methods and abstract methods (without implementation).
// Inheritance: A class can extend only one abstract class.
class Animal {
    move() {
        console.log("Animal is moving");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Bark");
    }
}
const dog = new Dog();
dog.makeSound(); // Output: Bark
dog.move(); // Output: Animal is moving
