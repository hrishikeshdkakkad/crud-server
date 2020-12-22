import { Request } from 'express';

export interface IEmployee {
  employeeID: number;
  name: string;
  dob: Date;
  salary: number;
  skills: string[];
  photo: Buffer;
}

export interface Employee {
  addEmployee(employee: IEmployee): Promise<IEmployee>;
}

export interface IFile {
  file: Buffer;
}
export interface IWithBufferProperty extends Request {
  buffer: IFile;
}
