# Decorators

A decorator is a special function that you can add to classes, properties, methods, or parameters to add extra functionality without having to change their code directly.

## What you can do?

In general terms you can do all of this:

- Validate data
- Logging
- Serialize
- Control access
- Dependency injection

This is a simple decorator:

```
// T stands for type and this is a generic
// this is how you instiacite an object: new (...args: any[])
// any means any type making this class generic
function MyCustomDecorator<T extends { new (...args: any[]): any }>(constructor: T) {
    // this: constructor.name is a value all classes in JS have
    console.log("Class name is:", constructor.name);
}

@MyCustomDecorator
class User {}
```

The decorator above it's just a logger, what diferenciates a logger, dependency injection, control access etc is basically the code inside the decorator.
But overall this is how a decorator should look like, You have to create a function and you can use that decorator in a method, classes, properties and params of a method.
