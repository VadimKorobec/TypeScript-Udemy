const userName = "Cat";

console.log(typeof userName);

type UserName = typeof userName;

const settings = {
  difficulty: "easy",
  minLevel: 10,
  didStart: false,
  players: ["John", "Jane"],
};

type Settings = typeof settings;

const loadData = (settings: Settings) => {};

loadData(settings)