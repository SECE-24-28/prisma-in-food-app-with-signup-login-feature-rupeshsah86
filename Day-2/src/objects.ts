let obj = {
  name: "Mohan",
  id: 1,
};

console.log(obj);

const student1: {
  name: string;
  age: number;
  marks: number[];
  isPassed: boolean;
} = {
  name: "Rohan",
  age: 21,
  marks: [40, 50, 60, 70, 80],
  isPassed: true,
};

// student 2
const student2: {
  name: string;
  age: number;
  marks: number[];
  isPassed: boolean;
} = {
  name: "Ram",
  age: 20,
  marks: [10, 20, 30, 40, 50],
  isPassed: false,
};

const student3: {
  name: string;
  age: number;
  marks: number[];
  isPassed: boolean;
} = {
  name: "Hari",
  age: 22,
  marks: [10, 10, 20, 25, 30],
  isPassed: false,
};

console.log(student1, student2, student3);

// solution using type alias

type Student = {
  name: string;
  age: number;
  marks: number[];
  isPassed?: boolean;
};

// create the object

const s2: Student = {
  name: "ALex",
  age: 20,
  marks: [10, 0, 9, 30],
  //isPassed: false
};

console.log("student 2 details: ", s2);

interface Employee {
  name: string;
  department: string;
  employeeId: number;
  isPromoted: boolean;
  salary: number;
}

// Car Doctor
interface Car {
  brandName: string;
  model: number;
  topSpeed: number;
  isEV: boolean;
}

interface Doctor {
  name: string;
  department: string;
  degree: string;
  yearsOfExp: number;
  isCertified: boolean;
}

const car1: Car = {
  brandName: "Mahindra",
  model: 2025,
  topSpeed: 140,
  isEV: true,
};
console.log("Car: ", car1);

const doctor1: Doctor = {
  name: "SD Tripathi",
  department: "Ortho",
  degree: "MBBS",
  yearsOfExp: 2,
  isCertified: true,
};
console.log("Doctor: ", doctor1);

const employee1: Employee = {
  name: "SriNivasan",
  department: "IT",
  employeeId: 1234,
  isPromoted: true,
  salary: 20000,
};

console.log(employee1);
