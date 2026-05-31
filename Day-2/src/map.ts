const nums =[1,2,3,4,5];

//task -> double the value value if every element of the array
//and retur a new array

//mao us available in the array
const updatedArr =nums.map((elem,idx,nums)=>{
    return elem*2;
});
console.log(updatedArr);
console.log("Original Arr:", nums);

//task
// const string =["Ram","shyam","hari"];
// console.log(string);
const users = [
  {
    id: 1,
    firstName: "Ram",
    phone: 8825980971,
    email: "ram@gmail.com",
  },

  {
    id: 2,
    firstName: "Shyam",
    phone: 9876543210,
    email: "shyam@gmail.com",
  },

  {
    id: 3,
    firstName: "Hari",
    phone: 9999999999,
    email: "hari@gmail.com",
  }
];

users.map((user)=>{
    return user.firstName;
})


const updatedUsers = users.map((user)=>{
    return user.firstName;
})

console.log(users);

console.log("only name :",updatedUsers);

