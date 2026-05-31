// Intersection means add (combination of more than one)

type Person = {
  name: string;
  age: number;
};

type Employee = {
  salary: number;
  employeeId?: number;
};

type Staff = Person & Employee;

const worker: Staff = {
  name: "Carol",
  age: 24,
  salary: 50000,
  // employeeId: 12345
};
console.log(worker);
