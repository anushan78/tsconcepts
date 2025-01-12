interface Todo {
  title: string;
  description: string;
}

// Partial make properties of the target type optional
const updatetodo = (todo: Partial<Todo>) => {
  // title and description will be optional
};

// Readonly: properties cannot be changed
const myTodo: Readonly<Todo> = {
  title: "Learn Typescript",
  description: "ASAP",
};
// following is not possible
//myTodo.title = ""

// Record
interface PageInfo {
  title: string;
}

const pages: Record<string, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};

const pageNumbers: Record<number, PageInfo> = {
  1: { title: "Home" },
  2: { title: "About" },
  3: { title: "Contact" },
};

// Pick
interface Details {
  id: number;
  title: string;
  completed: boolean;
}

type TodoPreview = Pick<Details, "title" | "completed">;
const myTodoSpecific: TodoPreview = {
  title: "Clean house",
  completed: false,
};

// Omit
type TodoOmit = Omit<Details, "completed">;
const omitOb: TodoOmit = {
  id: 22,
  title: "omit obj",
};
