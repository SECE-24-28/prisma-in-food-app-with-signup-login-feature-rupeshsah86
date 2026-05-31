export {};
// this file is a module, treat it as a private file
// that means all the variables and functions defined here are only
// limited within this file

// Don't treat this file as a global script

let age: number = 25;
// age = "Hello Age";

// : type in front of a variable name

console.log(age);

// If you write "noEmitOnError": true, under compilerOptions:{}
// then typescript type errors will be caught at compile time
// and the ts file then won't be converted to corresponding js file
// and no --> dist folder is created

// create 5 variables
let rollNo: number = 10; // number type
console.log("rollNo: ", rollNo);

// create the string
let message: string = "Hey there! I am learning Typescript";
console.log("message: ", message);

// create boolean
let flag: boolean = true;
console.log("flag: ", flag);

// create the array of different types
const arr1: number[] = [10, 20, 30, 40, 50];
console.log("arr1: ", arr1);

// push element of diff type
// arr1.push("Apple"); -- not allowed
console.log(arr1);

// create array of strings
const city: string[] = [
  "Coimbatore",
  "Chennai",
  "Bengaluru",
  "Mysore",
  "Munnar",
];

console.log(city);

const flag1: boolean[] = [true, false, false, true];
console.log(flag1);

// create the 2D array
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("matrix: ", matrix);

// readonly property does not let you modify the array
let colors: readonly string[] = ["red", "blue", "green"];
// colors.push("Yellow"); ---> not allowed
console.log(colors);

// let color : readonly string = "Purple"; --> readonly is only applicable to array and tuple

// type --  any
let data: any = 100;
console.log("Data: ", data);

// change the data value
data = "This is a string";
console.log("Modified data: ", data);

// data = true; // allowed

// let data1:any = 109;
// console.log(data1.toUpperCase()); // should not be allowed

// disadvantage of type: any == It prevents type saftey
// Type safety is the superpower of typescript,
// it will bypass type checking
// so no errors are caught during compile time
// or at the time of writing the
// code

const str: string = "my string";
console.log(str.toUpperCase());

// const myArray = [1, 2, 3, 99];

const myArray2: any[] = [1, 2, 3, 99, "Orange", true];
myArray2.push("Orange");
console.log(myArray2);
