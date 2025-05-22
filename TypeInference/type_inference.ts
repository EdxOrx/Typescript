function isLegalAge(age: number) {
  if (age >= 18) {
    return "is legal age";
  } else {
    return "is not legal age";
  }
}

let isLegalAgeStr = isLegalAge(10);
console.log(isLegalAgeStr);

let numbers = [1, 2, 3, 4]; // Infere this is number[]

numbers.push(5);
//numbers.push("hello"); // We cannot do this
console.log(numbers);

const names = ["Anne", "Louis", "Charlie"];

const lenNames = names.map((n) => n.length);
// Infere this is: number[]

console.log(lenNames); // [3, 4, 6]
