class Person {
  private _name: string;
  private _role: string;

  constructor(name: string, role: string) {
    this._name = name;
    this._role = role;
  }

  get role() {
    return this._role;
  }

  get name() {
    return this._name;
  }
}

class Guest extends Person {
  constructor(name: string, role: string) {
    super(name, role);
  }
}

class User extends Person {
  constructor(name: string, role: string) {
    super(name, role);
  }
}

class Admin extends Person {
  constructor(name: string, role: string) {
    super(name, role);
  }
}

const guest = new Guest("John", "guest");
const user = new User("Mary", "user");
const admin = new Admin("McGlovin", "admin");
const admin1 = new Admin("McClane", "admin");

/**
 * Let's suppose you have an array of several 'generic' types
 * like this example where you have Guest, User and Admin objects
 * that inherint from the Person class so all of the are of type
 * Person.
 *
 * So What we want is to get the admins
 */
const elements: Person[] = [guest, user, admin, admin1];

/**
 * This function is where the type predicates come to play since
 * you can use to get the admin so you have to use the is Admin and
 * check the attribute and by inference it will return a boolean
 * value, the difference between this and just checking against
 * against the value is that this is scalable and reusable, you
 * could have more validations inside the isAdmin function
 */
function isAdmin(person: Person): person is Admin {
  return person?.role === "admin";
}

const admins: Person[] = elements.filter((person) => {
  if (isAdmin(person)) return person;
});

console.log(admins);

// Run: npx ts-node Type_Guards/type_guards_complex.ts

/**
 * In console you will see:
 * [
 *  Admin { _name: 'McGlovin', _role: 'admin' },
 *  Admin { _name: 'McClane', _role: 'admin' }
 * ]
 */
