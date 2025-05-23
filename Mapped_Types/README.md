# Mapped Types

Simple way to describe mapped types is this allows you to create a new type based on another type

eg:

```
type Person = {
  name: string;
  age: number;
};

type PrefixedPerson = {
  [K in keyof Person as `prefix_${K}`]: Person[K];
  // K  : means the name of the property like name and age
  // in : this will iterate over the keys
  // keyof Person(T) : This will extract the keys of an object
  // T  : means the type of the key thats why we used  Person[K] to keep the original
};

```

Also there is something known as utility types which allow you to do:

- Partial: This will make the properties

```
type User = {
  name: string;
  age: number;
};

const partialUser: Partial<User> = {
  name: "Ana"
};
```

- Required: This will do the opposite and make all the properties required

```
type User = {
  name?: string;
  age?: number;
};

const partialUser: Required<User> = {
  name: "Ana",
  age: 10
};
```

- Readonly: This avoid to modify properties of an object

```
type AppConfig = {
  apiUrl: string;
  port: number;
  isProd: boolean;
};

const config: Readonly<AppConfig> = {
  apiUrl: "https://api.miapp.com",
  port: 443,
  isProd: true,
};
```

- Pick: this allows you to create a new type with some properties of the original

```
type User = {
  name: string;
  age: number;
  email: string;
};

type publicInfo = Pick<User, "name" | "email">;

const newUser: publicInfo = {
  name: "John",
  email: "john@example.com"
}; // This does not allow age

```

- Record: Create a n with keys and vales of a type
  - This allow to make sure all the keys have the type Rol
  - This makes sure all values have the type AccessLevel

```
type Rol = "admin" | "editor" | "reader";

type AccessLevel = {
  canEdit: boolean;
  canDelete: boolean;
  canSee: boolean;
};

const rolAccess: Record<Rol, AccessLevel> = {
  admin: {
    canEdit: true,
    canDelete: true,
    canSee: true,
  },
  editor: {
    canEdit: true,
    canDelete: false,
    canSee: true,
  },
  reader: {
    canEdit: false,
    canDelete: false,
    canSee: true,
  },
};
```
