"use strict";
// class User {
//   public name: string;
//   public age: number;
//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const bob = new User("Bob", 42);
console.log(bob);
