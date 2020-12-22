import { model, Schema, Document } from 'mongoose';

import { IEmployee } from '../interfaces/employee.interface';

export const employeeSchema: Schema<IEmployee> = new Schema({
  employeeID: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 128,
  },
  dob: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  skills: [
    {
      type: String,
    },
  ],
  photo: {
    type: Buffer,
  },
});

const EmployeeModel = model<IEmployee & Document>('employee', employeeSchema);

export default EmployeeModel;
