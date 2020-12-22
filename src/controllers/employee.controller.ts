import { NextFunction, Request, Response } from 'express';
import { CreateEmployeeDto } from '../dtos/employee.dto';
import { IEmployee } from '../interfaces/employee.interface';
import { employeeService } from '../services/employee.service';

class EmployeeController {
  public addEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const employeeData: CreateEmployeeDto = req.body;
    try {
      const createEmployee: IEmployee = await employeeService.addEmployee(employeeData);
      res.status(201).json({ data: createEmployee, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public addEmployeePhoto = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
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
      const { limit } = req.query;
      const employeeList = await employeeService.getAllEmployees(limit);
      res.status(200).send(employeeList);
    } catch (error: Error) {
      next(error);
    }
  };

  public getEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const employee = await employeeService.getOneEmployee(id);
      if (employee) {
        res.status(200).send(employee);
      } else {
        res.status(404).send();
      }
    } catch (error: Error) {
      next(error);
    }
  };

  public updateEmployeeInformation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { field, value } = req.body;
      const { id } = req.params;
      const employeeProfileUpdate = await employeeService.updateEmployeeField(id, field, value);
      if (employeeProfileUpdate) res.status(202).send();
    } catch (error: Error) {
      next(error);
    }
  };

  public deleteEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id: employeeIdToBeDeleted } = req.params;
      const deleteStatus = await employeeService.deleteEmployeeDocument(employeeIdToBeDeleted);
      if (deleteStatus.deletedCount > 0) {
        res.status(200).send();
      } else {
        res.status(400).send('No such employee');
      }
    } catch (error: Error) {
      next(error);
    }
  };
}

export const EmployeeController = new EmployeeController();
