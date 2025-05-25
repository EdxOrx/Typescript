class DatabaseService {
  connect() {
    console.log("Conecting to the database...");
  }

  save(user: string) {
    console.log(`User ${user} saved in the database.`);
  }
}

function InjectDB<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    db = new DatabaseService();
  };
}

@InjectDB
class UserService {
  db!: DatabaseService;

  register(name: string) {
    this.db.connect();
    this.db.save(name);
  }
}

const service = new UserService();
service.register("Juan");

// RUN: npx ts-node --compiler-options '{"experimentalDecorators": true}' Decorator/decorators_injection.ts
