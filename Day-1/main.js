let string = "Hello";
console.log(string);

// let string = "World";
// console.log(string);

// variables declared with let can not be redeclared

var string1 = "Hey there!";
console.log(string1);

var string1 = "How are you?";
console.log(string1);

// variables decalared with var can be redeclared;
string1 = "Hello Javascript!";
console.log(string1);

// variables declared with var keyword can be re-assigned


let num = 10;
console.log(num);

num = 20;
console.log(num);

// variables declared with let can be re-assigned

// let num = 20;
// console.log(num);


// const -- constant
const number = 100;
// number = 200;
console.log(number);

// Syntax Error - when you try to redeclare the variable
// Type Error - you get it when you try to re-assign the value
// in const
// const number = 200;
// console.log(number);

// variables declared with const can not be
// redeclared

let nums = [1, 2, 3, 4, 5];
nums = 12.234;
nums = "This is a string";
nums = true;
nums = {
    name: "Mohan",
    age: 20
};
console.log(nums);

// Javascript is dynamically typed. 
// If you have declared a variable of type number
// you can later reassigned it to some other data
// type

// Scoping 

// implement all types of functions
// 1. Function declaration multiply - product of 2 numbers
// 2. Function expression 
// 3. Arrow Function
// 4. Anonymous function

// nishchalgv1 -- github username
// multiply
function multiply(a, b){
    return a * b;
}
const ans1 = multiply(2, 3); 

// function expression - assigning a function to a variable
const multiply1 = function(a, b){
    return a * b;
}

const ans2 = multiply1(10, 2);

// arrow function
const multiply2 = (a, b) => {
    return a * b;
}
const ans3 = multiply2(4, 9);
console.log(ans1);
console.log(ans2);
console.log(ans3);



function dummy(a, b){
    a = a + 5;
    b = b + 10;
    console.log("Print a and b inside of function");

    console.log(a, b);
    // return {a, b};
}

let a = 10, b = 20;
dummy(a, b);
// console.log("Print a and b outside of function");
// console.log(a, b);

// let z = 100;
// function print(){
//     let z = 10;
//     console.log(z); // 10
// }
// print();
// console.log(z); // 100

// variables declared with let has function scope
var x = 99;
function print(){
    //var x = 88;
    console.log(x); // 
}
print();
console.log(x); // 


// an object is a real world entity

// create an object
// const, var, let
let student = {
    name: "Rahul",
    age: 20,
    hasGraduated: false,
    branch: "Computer Science and Engineering"
}

console.log(student);
// print the branch name
console.log(student.branch);

student.name = "Mohan";
console.log(student.name);
student = [10, 20, 30];
console.log("Modified: ", student);

// create one nested object
// address -- home no, city, street name

const student1 = {
    name: "Alex",
    age: 20,
    hasGraduated: false,
    branch: "AI and DS",
    marks: [80, 60, 70, 90],
    address: {
        city: "Coimbatore",
        state: "Tamil Nadu",
        collegName: "Sri Eshwar College of Engineering",
        hostelRoomNum: 102,
        pincode: 131001
    }
}
const cnMarks = student1.marks[2];
console.log("Computer Network Marks:", cnMarks);
const collegName = student1.address.collegName;
console.log("college name is: ", collegName);


function add(a, b){
    return a + b;
}

const output = add(10, "10");
console.log(output);
// 1010 or 20  string concatenation 1010