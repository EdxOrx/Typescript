function MyCustomDecorator<T extends { new (...args: any[]): any }>(
  constructor: T
) {
  // this: constructor.name is a value all classes in JS have
  console.log("Class name is:", constructor.name);
}

@MyCustomDecorator
class User {}

@MyCustomDecorator
class Guest {}

// Run: npx ts-node --compiler-options '{"experimentalDecorators": true}' Decorator/decorators.ts

/**
 * You will see this in console:
 *
 * Class name is: User
 * Class name is: Guest
 *
 * As you can see this is logging in the class name and this also is part
 * of generics you can use this decorator with any class.
 */
