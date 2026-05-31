function sayHello() {
  console.log("Hello from  Async wait");
  sayHello();
}

async function sayHello2() {
  console.log("Hello 2 from Async Await");
}

async function sum(a, b) {
  const output = await (a + b);
  return output;
}
async function multiply(a, b) {
  const output = await (a * b);
  return output;
}

const output = multiply(2, 3);
console.log(output);

// In users and In products - replace then cath async await

async function returnPromise() {
  const p = await new Promise((resolve, reject) => {
    resolve("Promise Resolved.");
  });
}
