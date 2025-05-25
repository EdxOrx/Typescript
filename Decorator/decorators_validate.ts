function notEmpty(target: any, propertyKey: string) {
  let value: string;

  Object.defineProperty(target, propertyKey, {
    get() {
      return value;
    },
    set(newValue: string) {
      if (!newValue || newValue.trim() === "") {
        throw new Error(`the property '${propertyKey}' cannot be empty.`);
      }
      value = newValue;
    },
  });
}

class Product {
  @notEmpty
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p1 = new Product("T-Shirt");
const p2 = new Product("");

// RUN: npx ts-node --compiler-options '{"experimentalDecorators": true}' Decorator/decorators_validate.ts
