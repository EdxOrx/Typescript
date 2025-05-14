// Example alias a simple type:
type Id = number;

let userId: Id = 123;

// Example obj
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Jesus",
  age: 30,
};

// Example union
type PaymentMethod = "cash" | "credit" | "paypal";

function pay(method: PaymentMethod) {
  console.log(`Paying in ${method}`);
}

pay("paypal"); // This is ok
pay("bitcoin"); // This is an error and mostlikely you will see an error un vscode

// Compose types
type Base = { age: number; id: number };
type WithName = Base & { name: string }; // combine Base and with this object

const obj: WithName = { id: 1, name: "Jesus", age: 30 }; // if you remove one of the elements you will se an error in vscode
