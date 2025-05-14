# Types

In TS types is a way to represent a set of types, structures.

eg:

Alias a type:

```
type Id = number;

let userId: Id = 123;
```

this also can be applied to objects:

```
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Jesus",
  age: 30,
};
```

type union:

```
type PaymentMethod = "cash" | "credit" | "paypal";

function pay(method: PaymentMethod) {
  console.log(`Paying in ${method}`);
}

pay("paypal"); // This is ok
pay("bitcoin"); // This is an error
```

Compose types:

```
type Base = { age: number, id: number};
type WithName = Base & { name: string }; // combine Base and with this object

const obj: WithName = { id: 1, name: "Jesus", age: 30 };

```
