"use strict";
let validKey;
validKey = "name";
validKey = "age";
const getProp = (obj, key) => {
    const val = obj[key];
    if (val === undefined || val === null) {
        throw new Error("Accessing undefined or null value");
    }
    return val;
};
const data = {};
const animal = { name: 'Cat', age: 5 };
const val = getProp(animal, 'age');
