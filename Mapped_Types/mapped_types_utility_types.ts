type Director = {
  name: string;
  age: number;
  id: number;
  building: number;
  salary: number;
};

const Director: Partial<Director> = {
  name: "Ana", // You will see that you can skip all of the other values
};

// This will require to have all of the props, try to remove one of value
// you see VS code will complain about it
const StrictDirector: Required<Director> = {
  name: "Ana",
  age: 0,
  id: 0,
  building: 0,
  salary: 0,
};
/**
 * ReadOnly.
 */
type MyConfig = {
  apiUrl: string;
  port: number;
};

const config: Readonly<MyConfig> = {
  apiUrl: "https://api.miapp.com",
  port: 443,
};

/**
 * Try uncommeting this line and you will se and error
 */
// config.apiUrl = "something new";

/**
 * Record
 *
 * Using record will force you to have the an object with the attributes
 * you want, in this example if you try to remove on of the elements in
 * availableTranslations you will get and an error.
 */
type Lang = "en" | "fr" | "sp";

type Translations = Record<Lang, string>;

const availableTranslations: Translations = {
  en: "Welcome",
  fr: "Bienvenue",
  sp: "Bienvenido",
};
