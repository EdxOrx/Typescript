# Type Guards

This allows to refine the type of variable within a block of code.
This will help you to protect or verify the data type of a variable.

eg:

```
type User = { name: string };
type Guest = { code: string };

function greeting(person: User | Guest) {
  if ("name" in person) {
    console.log(`Hi ${person.name}`); // it's a user
  } else {
    console.log(`Welcome, your code is ${person.code}`); // it's a guest
  }
}
```

As you can see this function can accept either a User or a Guest type and as you can see I can access the properties name and code even with none of them have the same properties

## Type Predicate

In TypeScript, a Type Predicate is a way to assert the type of a variable within a function, so that the compiler can automatically refine the type when using that function as a Type Guard.

you can use the keywords `is` to create an unlimited amount if type predicates:

eg:

```
function isString(valor: unknown): valor is string {
  return typeof valor === "string";
}

if(isString("Hello")){
  console.log("it's string")
} else {
  console.log("it's not a string")
}
```
