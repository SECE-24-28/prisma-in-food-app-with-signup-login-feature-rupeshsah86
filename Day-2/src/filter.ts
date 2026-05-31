const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
const evenNums = nums.filter((elem) => {
  return elem % 2 === 0;
});

console.log("Even nums:", evenNums);

const arr = [
  {
    name: "Rohan",
    age: 17,
  },
  {
    name: "Ramesh",
    age: 20,
  },
  {
    name: "Suresh",
    age: 16,
  },
  {
    name: "Jenish",
    age: 19,
  },
];

// Filter users whose age >= 18
const output = arr.filter((obj) => {
  return obj.age >= 18;
});

console.log(output);
