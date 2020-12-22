import HttpException from '../exceptions/HttpException';
import { Employee, IEmployee } from '../interfaces/employee.interface';
import EmployeeModel from '../models/employee.model';
import { isEmpty } from '../utils/utils';

class EmployeeService implements Employee {
  public employee = EmployeeModel;

  async addEmployee(employeeData: IEmployee): Promise<IEmployee> {
    if (isEmpty(employeeData)) throw new HttpException(400, 'Enter Details in the right format');

    const findEmployee: IEmployee = await this.employee.findOne({ employeeID: employeeData.employeeID });
    if (findEmployee) throw new HttpException(409, `Employee with ${employeeData.employeeID} already exists`);

    const createdEmployeeData: IEmployee = await this.employee.create(employeeData);
    return createdEmployeeData;
  }

  async employeePhoto(employeePhoto: Buffer, employeeId: number): Promise<IEmployee> {
    if (!employeePhoto || isEmpty(employeeId)) throw new HttpException(400, 'ID or Photo missing');

    const updateEmployeeProfile = await this.employee.findOneAndUpdate({ employeeID: employeeId }, { photo: employeePhoto });
    return updateEmployeeProfile;
  }

  async deleteEmployeeDocument(id: IEmployee): Promise<IEmployee> {
    if (isEmpty(id)) throw new HttpException(400, 'Employee ID to delete is missing');

    const deleteEmployeeProfile = await this.employee.deleteOne({ employeeID: id });
    console.log(deleteEmployeeProfile);
    return deleteEmployeeProfile;
  }

  async getAllEmployees(limit: string, skip: string): Promise<IEmployee[]> {
    const employeeList = await this.employee.find({}, '-photo').limit(parseInt(limit)).skip(parseInt(skip));
    return employeeList;
  }

  async getOneEmployee(id: number): Promise<IEmployee> {
    if (isEmpty(id)) throw new HttpException(400, 'Employee ID to delete is missing');
    const employeeList = await this.employee.findOne({ employeeID: id });
    return employeeList;
  }

  async updateEmployeeField(employeeID: number, field: IEmployee, value: string): Promise<ITodo> {
    const updateValue = {};
    updateValue[field] = value;
    const updatedField = await this.employee.findOneAndUpdate({ employeeID: employeeID }, updateValue);
    return updatedField;
  }
}

export const employeeService = new EmployeeService();
