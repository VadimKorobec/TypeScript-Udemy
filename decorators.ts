const logger = (target: any, ctx: ClassDecoratorContext) => {};

@logger
class Person {
  name = "Bob";

  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}
