// Object Types

// Object types are key:type pairs
// not recommend to type assign for objects
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Wesley",
//   age: 25
// };

const person = {
  name: "Wesley",
  age: 25,
  hobbies: ["Golf", "Cooking", "Coding"]
};

console.log(person);

// Compilation error because person doesn't have property of nickname
// console.log(person.nickname);

//  Arrays
let myArray: string[];

myArray = ["purple", "green", "red", "blue"];

// compilation error because array is of type string
// can use type any to have any type in array but this is the same as javascript
// let myArray: any[]
// myArray = ['Wesley', 'Austin', 1];

console.log(myArray);

// Tuples

// syntax
let myTuple: [number, string];

myTuple = [1, "hello"];

// tuples still accept the push method so do not use it on them
// myTuple.push("well that is not supposed to work");

// compilation error
// myTuple = [1, "what", false];
// myTuple[1] = false;

console.log(myTuple);

// Enums
// Base behavior is numbers starting with 0.
// can assign first enum to any number and all other will be based off of that
enum Role {
  MANAGER = "manager",
  CHEF = "cook",
  SERVER = "waitor"
}

const employee = {
  name: "Wesley",
  age: 25,
  hobbies: ["Golf", "Cooking", "Coding"],
  role: Role.MANAGER
};

console.log(employee);
