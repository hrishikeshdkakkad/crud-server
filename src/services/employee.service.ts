import { ITodo, Todo } from '../interfaces/employee.interface';
import TodoModel from '../models/employee.model';

export class Todos implements Todo {
  async saveTodo(todo: ITodo): Promise<ITodo> {
    try {
      const Todo = new TodoModel(todo);
      const result = await Todo.save();
      return result;
    } catch (error: unknown) {
      throw error;
    }
  }

  async getTodo(): Promise<ITodo[]> {
    try {
      const todos = TodoModel.find({});
      return todos;
    } catch (error) {
      throw error;
    }
  }

  async updateTodo(id: string, status: boolean): Promise<ITodo> {
    try {
      const todo = await TodoModel.findByIdAndUpdate({ _id: id }, { status: status }, { new: true });
      return todo;
    } catch (error) {
      throw error;
    }
  }
}
