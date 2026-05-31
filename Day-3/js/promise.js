const promise = new Promise((resolve, reject) => {
  reject("Promise Rejected!!");
  // console.log("this is promise");
  // resolve("Promise resolve !");
  // console.log("this is inside the promise");
});
console.log(promise);
promise
  .then(() => {
    // console.log("Promise is handled");
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });

// funtion can retyrn a promise
function returnPromise() {
  return new Promise((resilve, reject) => {
    // resolve("This promise is resolved.");
    reject("This promise is rejectd");
  });
}

const p = returnPromise();
p.then(() => {
  console.log("It is fullfiled");
}).catch((e) => {
  console.log(e.message);
});
console.log(p);
