interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

let user: Authenticatable;

user = {
  email: "user@test.com",
  password: "qq11qq11",

  login() {},

  logout() {},
};
