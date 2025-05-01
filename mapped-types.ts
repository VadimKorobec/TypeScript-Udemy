type Operations = {
  add: (a: number, b: number) => number;
  substract: (a: number, b: number) => number;
};

type Result = {
  add: number;
  substract: number;
};

let mathOperations: Operations = {
  add(a: number, b: number) {
    return a + b;
  },

  substract(a: number, b: number) {
    return a - b;
  },
};

let mathResults: Result = {
  add: mathOperations.add(1, 2),
  substract: mathOperations.substract(5, 4),
};
