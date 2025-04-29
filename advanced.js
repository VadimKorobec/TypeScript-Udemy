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
    static eid = "User";
}
console.log(User1.eid);
const cat = new User1();
cat.firstName = "cat";
cat.lastName = "cat";
console.log(cat.fullName);
class Employee extends User1 {
    jobTitle;
    constructor(jobTitle) {
        super();
        this.jobTitle = jobTitle;
    }
}
class UIElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(targetLocation) { }
}
class sideDrawerElement extends UIElement {
    identifier;
    position;
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
