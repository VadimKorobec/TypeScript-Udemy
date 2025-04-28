// class User {
//   public name: string;
//   public age: number;
//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }

class User {
  constructor(public name: string, public age: number) { }
  
  greet() {
    console.log('My age: ' + this.age)
  }
}

const bob = new User("Bob", 42);
bob.greet()
console.log(bob)