// import { StringLiteral } from "typescript";

// let x = 1; //type inferencing

// let y: number = 1;

// function greetUser(firstName: string) {
//   return "Hello " + firstName;
// }

// console.log(greetUser("Puneet"));

// function delayedCall(anotherFn: (a: string) => void) {
//   setTimeout(anotherFn, 1000);
// }

// function greet(name: string) {
//   console.log("Hello " + name);
// }

// //interface vs type
// interface Manager {
//   name: string;
//   age: number;
// }

// interface Employee {
//   name: string;
//   department: string;
// }

// type TeamLead = Manager & Employee;

// let t: TeamLead = {
//   name: "harkirat",
//   age: 21,
//   department: "abc",
// };

// // extending in interface

// interface User {
//   name: string;
//   age: number;
//   address?: {
//     city: string;
//     country: string;
//     pincode: number;
//   };
// }

// let user2: User = {
//   name: "raman",
//   age: 22,
// };

// interface Admin extends User {
//   role: string;
// }

// // extending in type
// type Usert = {
//   name: string;
//   age: number;
// };

// type Admint = Usert & {
//   role: string;
// };

// // Union types allow defining a value that can be one of several types.
// type Status = "success" | "failure" | "pending";

// // type merging only possible in interface, not allowed in type

// interface A {
//   name: string;
// }

// interface B {
//   age: number;
// }

// const user: User = {
//   name: "Alice",
//   age: 25,
// };

// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// class Manager implements Person {
//   name: string;
//   age: number;
//   number: string;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//     this.number = "1232312";
//   }

//   greet(phrase: string): void {
//     throw new Error("Method not implemented.");
//   }
// }


// // abstract class

// abstract class User1 {
//   name: string;
//   constructor(name: string) { this.name = name; }
//   abstract greet(): string;
// }

// class Employee extends User1 {
//   name: string;
//   constructor(name: string) {
//     super(name);
//     this.name = name;
//   }
//   greet() {
//     return "hi " + this.name
//   }
// }

// //in interface we cant have a function with default implementation

// // Abstract Class
// // Definition: A class that cannot be instantiated on its own but serves as a base class.
// // Purpose: To provide a partially implemented blueprint for subclasses.
// // Supports Implementation: Abstract classes can include both fully implemented methods and abstract methods (without implementation).
// // Inheritance: A class can extend only one abstract class.

// abstract class Animal {
//   abstract makeSound(): void; // Abstract method
//   move(): void {
//     console.log("Animal is moving");
//   }
// }

// class Dog extends Animal {
//   makeSound(): void {
//     console.log("Bark");
//   }
// }

// const dog = new Dog();
// dog.makeSound(); // Output: Bark
// dog.move();      // Output: Animal is moving