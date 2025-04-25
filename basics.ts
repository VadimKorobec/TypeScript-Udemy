// class User {
//   public name: string;
//   public age: number;
//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }

class User {
  constructor(public name: string, public age: number) {}
}

const bob = new User("Bob", 42);
console.log(bob)