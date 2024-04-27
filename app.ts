// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Vadim",
//   age: 40,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Vadim",
  age: 40,
  hobbies: ["Sports", "Cooking"],
  role: Role.READ_ONLY,
};

if (person.role === Role.ADMIN) {
  console.log("its admin");
}

switch (person.role) {
  case Role.ADMIN:
    console.log("its admin");
  case Role.READ_ONLY:
    console.log("its read only");
  case Role.AUTHOR:
    console.log("its author");
}

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
