interface IPaymentProcessor {
  pay(amount: number): Promise<void>;
}

class StripeProcessor implements IPaymentProcessor {
  async pay(amount: number): Promise<void> {
    console.log(`Pay $${amount} in Stripe...`);
  }
}

class PaypalProcessor implements IPaymentProcessor {
  async pay(amount: number): Promise<void> {
    console.log(`Pay $${amount} in PayPal...`);
  }
}

class PaymentService {
  constructor(private processor: IPaymentProcessor) {}

  async process(amount: number): Promise<void> {
    console.log("Starting payment");
    await this.processor.pay(amount);
    console.log("Payment has finished");
  }
}

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

main("stripe");
console.log("---------------");
main("paypal");

// run: npx ts-node interfaces.ts
