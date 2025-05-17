interface User {
  name: string;
}

interface User {
  age: number;
}

const person: User = {
  name: "Alice",
  age: 30,
};

// You will se an error in VSCode
type UserType = {
  name: string;
};

// You will se an error in VSCode
type UserType = {
  age: number;
};
