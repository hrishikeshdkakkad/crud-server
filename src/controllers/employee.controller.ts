import { NextFunction, Request, Response } from 'express';

class EmployeeController {
  public addEmployee = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const todo = new Todos();
      const result = await todo.saveTodo(body);
      res.status(200).send(result);
    } catch (error: Error) {
      res.status(400).send(error.message);
    }
  };

  public getAllEmployees = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const todo = new Todos();
      const result = await todo.saveTodo(body);
      res.status(200).send(result);
    } catch (error: Error) {
      res.status(400).send(error.message);
    }
  };

  public getEmployee = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const todo = new Todos();
      const result = await todo.saveTodo(body);
      res.status(200).send(result);
    } catch (error: Error) {
      res.status(400).send(error.message);
    }
  };

  public updateEmployeeInformation = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const todo = new Todos();
      const result = await todo.saveTodo(body);
      res.status(200).send(result);
    } catch (error: Error) {
      res.status(400).send(error.message);
    }
  };

  public deleteEmployee = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const todo = new Todos();
      const result = await todo.saveTodo(body);
      res.status(200).send(result);
    } catch (error: Error) {
      res.status(400).send(error.message);
    }
  };
}

export const EmployeeController = new EmployeeController();
