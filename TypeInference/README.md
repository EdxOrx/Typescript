# Type Inference

This is the capability of the compiler to deduce the data type of a variable, function, expresion, etc. without the programmer explicitly specifying it.

Eg:

```
let nombre = "Juan";
```

```
function sum(a: number, b: number) {
  return a + b; // TypeScript infirence this function will return a number
}
```

```
let fruits = ["apple", "pinapple"]; // Typescript infirence this is string[]
```

```
const person = { name: "Ana", age: 25 };
const { name, age } = person; // name: string, age: number
```

## When to specify data types manually

- When you need greater clarity or security.
- When values ​​can be of more than one type.
- In public libraries or APIs.
