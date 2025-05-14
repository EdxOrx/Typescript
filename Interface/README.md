# Interface

An interface can be seen as a contract that an object/class must have.

a simple example is this:

```
interface Person {
    name: string;
    speak(): void;
}

```

if you want to add an interface to a class you would do it like this:

```
class Teacher implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log("Hey I am a teacher");
  }
}
```

This is only the boring part of interfaces.

The main purpose of interfaces is the decoupling.

## What is decoupling?

Decoupling is meant to separate the dependencies between classes so the code becomes modular, reusable and easy to mantain.

Eg:
First of all let's define an interface:

```
interface IPaymentProcessor {
    pay(amount: number): Promise<void>;
}
```

Now you implement this interface in 2 different classes.
As you can see there are 2 different ways of payment one in stripe and another one in paypal assuming the process of each one is different.

```
class StripeProcessor implements IPaymentProcessor {
    async pay(amount: number): Promise<void> {
        console.log(`Pay $${amount} in Stripe...`);
    }
}
```

```
class PaypalProcessor implements IPaymentProcessor {
    async pay(amount: number): Promise<void> {
        console.log(`Pay $${amount} in PayPal...`);
    }
}
```

Now we define a class that accepts an interface in this case `IPaymentProcessor` this is where part of the magic is made.

```
class PaymentService {
    constructor(private processor: IPaymentProcessor) {}

    async process(amount: number): Promise<void> {
        console.log("Starting payment");
        await this.processor.pay(amount);
        console.log("Payment has finished");
    }
}

```

This where most of the magic is made as you can see we defined a variable of type `IPaymentProcessor` and depending of the type of payment passed to the main we assign an object and we pass that variable to the PaymentService.

This decoupling allow us to make this logic easy to mantain, because if later you want to add another type of payment is really easy and easy to understand.

```
async function main(type: string) {
    let processor: IPaymentProcessor;

    if (type === "stripe") {
        processor = new StripeProcessor();
    } else if (type === "paypal") {
        processor = new PaypalProcessor();
    } else {
        throw new Error("Payment not valid");
    }

    const service = new PaymentService(processor);
    await service.process(150);
}
```
