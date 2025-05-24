type Employee = {
  name: string;
  age: number;
  id: number;
  building: number;
  salary: number;
};

type EmployeeString = {
  [K in keyof Employee as K]: string;
};

const employeeOriginal: Employee = {
  name: "John",
  age: 10,
  id: 1,
  building: 120,
  salary: 120,
};

const employeeStr: EmployeeString = {
  name: "John",
  age: "10",
  id: "1",
  building: "120",
  salary: "120",
};

console.log("employeeOriginal", employeeOriginal);

console.log("employeeStr", employeeStr);

/**
 * As you can see above I was able to convert the original Employee type
 * that accepts numbers and strings to a new one that only accepts
 * strings
 */

// Run: npx ts-node Type_Guards/type_guards_complex.ts
