# What's the difference between a type and an interface?

If you notice there are think that can be achieve with both eg:

1. Define objects:

```
interface User {
  name: string;
  age: number;
}

type UserType = {
  name: string;
  age: number;
};
```

2. Extension:

```
interface Person {
  name: string;
}
interface Employee extends Person {
  role: string;
}

type PersonType = { name: string };
type EmployeeType = PersonType & { role: string };
```

you can also define functions and arrays etc.

## When to use interfaces or types?

Interfaces:

- Defining the shape of an object
- Ideal to work with classes

Type:

- Define functions, unions, tuples, and combining types

### Which one to use?

If you are woking with classes use interfaces

If you want to describe functions ir no-objects related stuff use types

### Biggest difference:

You can declare the same interface multiple times, and TypeScript automatically combines them. This is called declaration merging.
