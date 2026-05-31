let ID: string | number | boolean;

ID = "abc123";
console.log(ID);
ID = 123;
console.log(123);
ID = true;
console.log(ID);

type rollNo = string | number;

// type is like the generic data type for all requirements
// interface is most suited for the object structure

// type - defining the object structure
// type can also be used with union, intersection, classes
// but interface -- object, classes

let roll_num: rollNo = 99;
console.log(roll_num);
roll_num = "456";
console.log(roll_num);
