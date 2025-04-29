let names: string[] = ["cat", "mouse", "dog"];

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | number> = {};

store.name = "Cat";
store.age = 5;

console.log(store);

const merge = <T, U>(a: T, b: U): [T, U] => {
  return [a, b];
};

console.log(merge("num", { name: "Cat" }));

const mergeObj = <T>(a: T, b: T) => {
  return { ...a, ...b };
};
const merged = mergeObj({ name: "Cat" }, { age: "five" });
console.log(merged);

const mergeObj1 = <T extends object, U extends object>(a: T, b: U) => {
  return { ...a, ...b };
};
const merged1 = mergeObj1({ name: "Cat" }, { age: 5 });
console.log(merged1);
