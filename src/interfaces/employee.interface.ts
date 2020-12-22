export interface IEmployee {
  employeeID: number;
  name: string;
  dob: Date;
  salary: number;
  skills: string[];
  photo: string;
}

export interface Todo {
  saveTodo(todo: ITodo): Promise<ITodo>;
  getTodo(): Promise<ITodo[]>;
  updateTodo(id: string, status: boolean): Promise<ITodo>;
}
