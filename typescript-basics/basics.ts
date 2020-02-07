// Type Basics

// function works fine with inputs of type number but
// behaves unexpectedly when passed a string.
// can fix issue by adding types
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// Type Assignment - should only be used when
// variable assignment occurs after variable declaration
let number1: number;
number1 = 5;
// const number1 = "5";

// Type Inference
const number2 = 2.8;

const sum = add(number1, number2);

//  logs 52.8 when passed a string but 7.8 when passed a number
console.log(sum);

// Primitive Types
// - number
// - string
// - boolean (true or false) not truthy or falsy
// - null
// - undefined
