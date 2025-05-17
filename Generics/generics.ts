// lets supose we have 2 different kind of types or interfaces:
// in generics you can use types and interfaces.

type Teacher = {
  id: number;
  name: string;
  isActive: boolean;
};

type Student = {
  id: number;
  name: string;
  grade: number;
  isActive: boolean;
};

function getActive<T extends { isActive: boolean }>(items: T[]): T[] {
  return items.filter((item) => item?.isActive);
}

const students: Student[] = [
  { id: 1, name: "Alice", grade: 1, isActive: true },
  { id: 2, name: "Bob", grade: 2, isActive: true },
  { id: 3, name: "Carol", grade: 2, isActive: false },
];

const teachers: Teacher[] = [
  { id: 1, name: "John", isActive: true },
  { id: 2, name: "Mary", isActive: false },
  { id: 3, name: "Peter", isActive: false },
];

console.log(getActive(students));
console.log(getActive(teachers));

// Run: npx ts-node Generics/generics.ts

/**
 * As you can see I can use getActive with teachers and students
 * the differences is when you declare the function you have use use T
 * instead of the data type:
 *
 * function functionName
 *  <T extends //add the value you want use even could be a whole interface/type>
 *  (//params: T): T {
 *  //body of the function
 * }
 */
