function generic<T>(value: T): T|void {
  console.log(value);
  return value;
}
generic<String>("Hello World");
const num=generic<number>(10);
console.log(num);

function getArrElem<T>(arr:T[]){
    return arr[0];
}

const output = getArrElem<number>([1,2,3,4,5]);
console.log("0th elem",)