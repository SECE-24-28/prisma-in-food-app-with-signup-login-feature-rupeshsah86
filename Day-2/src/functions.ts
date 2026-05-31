// create a function add
function add(a: number, b:number):number{
    return a + b;
}

const output:number = add(10, 20);
console.log(output);

// create some more functions depositMoney(amount) will add to the balance
const balance : number = 5000;
const depositMoney = (amount: number):number => {
    return balance + amount;
}
const result = depositMoney(10000);
console.log(result);

// create function expression

const withdrawMoney = function(amount: number):number{
    return balance - amount;
}

console.log(withdrawMoney(2000));


// create a function that prints some text

function printText():void{
    console.log("Hello everyone");
}

printText();

// template string
const firstName = "Mohan";
const lastName = "Kumar";
const fullName = `${firstName} ${lastName}`;
console.log(`Welcome ${fullName} to the class.`);


// forEach -> to iterate on the array
// return type -> void
const fruits = ["Apple", "Orange", "Papaya", "Grapes", 10, 20, 30, false];

// print every element of this array
fruits.forEach((elem, idx) => {
    console.log("elem: ", elem, " idx: ", idx);
})