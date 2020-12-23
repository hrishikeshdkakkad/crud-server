import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';

import { IEmployee, IWithBufferProperty } from '../interfaces/employee.interface';
import { employeeService } from '../services/employee.service';
class EmployeeControllerClass {
  public addEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const employeeData: IEmployee = req.body;
    try {
      const createEmployee: IEmployee = await employeeService.addEmployee(employeeData);
      res.status(201).json({ data: createEmployee, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public addEmployeePhoto = async (req: IWithBufferProperty, res: Response, next: NextFunction): Promise<void> => {
    try {
      const employeePhotoBuffer = req.file.buffer;
      const photoUpdateResult = await employeeService.employeePhoto(employeePhotoBuffer, req.body.employeeID);
      if (photoUpdateResult) {
        res.status(200).send();
      }
    } catch (error) {
      next(error);
    }
  };

  public getAllEmployees = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { limit, skip } = req.query;
      const employeeList = await employeeService.getAllEmployees(limit as string, skip as string);
      res.status(200).send(employeeList);
    } catch (error: unknown) {
      next(error);
    }
  };

  public getEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const employee = await employeeService.getOneEmployee(parseInt(id));
      if (employee) {
        res.status(200).send(employee);
      } else {
        res.status(404).send();
      }
    } catch (error: unknown) {
      next(error);
    }
  };

  public updateEmployeeInformation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { field, value } = req.body;
      const { id } = req.params;
      const employeeProfileUpdate = await employeeService.updateEmployeeField(parseInt(id), field, value);
      if (employeeProfileUpdate) res.status(202).send();
    } catch (error: unknown) {
      next(error);
    }
  };

  public deleteEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const deleteStatus = await employeeService.deleteEmployeeDocument(parseInt(id));
      if (deleteStatus.deletedCount > 0) {
        res.status(200).send();
      } else {
        res.status(400).send('No such employee');
      }
    } catch (error: unknown) {
      next(error);
    }
  };

  public getEmployeeImage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      console.log(id);
      const image = await employeeService.getEmpPhoto(parseInt(id));
      if (!image) {
        throw new HttpException(404, 'Image for the user does not exist');
      }
      res.set('Content-Type', 'image/jpg');
      res.status(200).send(image);
    } catch (error: unknown) {
      console.log(error);
      next(error);
    }
  };
}

export const EmployeeController = new EmployeeControllerClass();
