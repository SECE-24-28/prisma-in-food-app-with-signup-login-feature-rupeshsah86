// find function in js

// find() - returns the first matching element, it could be a number, boolean, string or an object
// if elem is present and there is a match --> it returns the element pointing to the same original element
// otherwise if not present -- returns undefined

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Javascript",
    isCompleted: false,
  },
  {
    id: 2,
    title: "ReactJs",
    isCompleted: false,
  },
  {
    id: 3,
    title: "NextJs",
    isCompleted: false,
  },
];

function searchTask(id: number): Task | undefined {
  // search for the task with matching id
  const task = tasks.find((elem, index) => {
    return elem.id === id;
  });
  if (!task) {
    console.log("No Task Found");
  }
  return task;
}

const output = searchTask(2);
//modifying the output task

if (output) {
  output.title = "Learning Typescript";
  console.log("searched task: ", output);
  console.log("original task: ", tasks);
} else {
  console.log("Task not found");
}
