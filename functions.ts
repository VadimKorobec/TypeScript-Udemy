function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHanble(n1: number, n2: number, cb: (value: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(10, 5));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

addAndHanble(10, 20, (result) => {
  console.log(result);
});
