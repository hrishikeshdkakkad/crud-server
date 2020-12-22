import { model, Schema, Document } from 'mongoose';
import { IEmployee } from '../interfaces/employee.interface';

const employeeSchema: Schema<IEmployee> = new Schema({
  employeeID: {
    type: String,
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
    type: Date,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  skills: {
    type: [
      {
        skill: {
          type: String,
        },
      },
    ],
    required: true,
  },
  photo: {
    type: Buffer,
  },
});

const EmployeeModel = model<IEmployee & Document>('employee', employeeSchema);

export default EmployeeModel;
