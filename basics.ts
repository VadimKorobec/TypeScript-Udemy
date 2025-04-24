const add = (a: number | string, b: number | string) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return `${a}-${b}`;
  }
};

let val:{} = 'abc' 

console.log(add('hello', 2));
