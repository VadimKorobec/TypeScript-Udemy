type User2 = {
  name: string;
  age: number;
};

type User2Keys = keyof User2;

let validKey: User2Keys;

validKey = "name";
validKey = "age";

const getProp = <T extends object, U extends keyof T>(obj: T, key: U) => {
  const val = obj[key];
  if (val === undefined || val === null) {
    throw new Error("Accessing undefined or null value");
  }

  return val;
};

const data = {}

const animal = { name: 'Cat', age: 5 };

const val = getProp(animal,'age')