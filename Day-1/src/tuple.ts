let arr = ["Mohan", 20, true];

console.log("age now: ", arr[1]);

arr = ["Mohan", true, 20];
console.log("age later: ", arr[1]);

let arr1: [string, number, boolean];

arr1 = ["Rohan", 21, false];
console.log("age using tuple: ", arr1[1]);

// arr1 = ["Rohan", false, 21]; // not allowed
console.log("Age now using tuple: ", arr1[1]);

let coordinates: [number, number];
coordinates = [21.345, 20.77];
console.log(coordinates);
// coordinates = ["hello", 2]; // not allowed
console.log(coordinates);
