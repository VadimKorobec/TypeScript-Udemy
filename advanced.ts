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
}

const cat = new User1();
cat.firstName = "cat";
cat.lastName = 'cat'
console.log(cat.fullName);
