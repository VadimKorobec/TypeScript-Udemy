"use strict";
class User1 {
    _firstName = "";
    _lastName = "";
    set firstName(name) {
        if (name.trim() === "") {
            throw new Error("invalid name.");
        }
        this._firstName = name;
    }
    set lastName(name) {
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
cat.lastName = 'cat';
console.log(cat.fullName);
