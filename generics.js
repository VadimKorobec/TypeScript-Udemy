"use strict";
let names = ["cat", "mouse", "dog"];
let store = {};
store.name = "Cat";
store.age = 5;
console.log(store);
const merge = (a, b) => {
    return [a, b];
};
console.log(merge("num", { name: "Cat" }));
const mergeObj = (a, b) => {
    return { ...a, ...b };
};
const merged = mergeObj({ name: "Cat" }, { age: "five" });
console.log(merged);
const mergeObj1 = (a, b) => {
    return { ...a, ...b };
};
const merged1 = mergeObj1({ name: "Cat" }, { age: 5 });
console.log(merged1);
