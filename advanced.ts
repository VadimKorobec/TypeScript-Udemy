class User1 {
  private _firstName: string = "";
  private _lastName: string = "";

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("invalid name.");
    }
    this._firstName = name;
  }

  set lastName(name: string) {
    if (name.trim() === "") {
      throw new Error("invalid name.");
    }
    this._lastName = name;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  static eid = "User";
}

console.log(User1.eid);

const cat = new User1();
cat.firstName = "cat";
cat.lastName = "cat";
console.log(cat.fullName);

class Employee extends User1 {
  constructor(public jobTitle: string) {
    super();
  }
}

abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {}
}

class sideDrawerElement extends UIElement {
  constructor(public identifier: string, public position: "left" | "right") {
    super(identifier);
  }
}
