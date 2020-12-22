import { model, Schema, Document } from 'mongoose';

import { IEmployee } from '../interfaces/employee.interface';

interface ICounter {
  seq: number;
}

const CounterSchema = new Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});
const counter = model<any, any>('counter', CounterSchema);

export const employeeSchema: Schema<IEmployee> = new Schema({
  employeeID: {
    type: Number,
    unique: true,
    // default: 0,
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

employeeSchema.pre('save', function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const doc: any = this;
  counter.findByIdAndUpdate({ _id: 'entitiyID' }, { $inc: { seq: 1 } }, { new: true, upsert: true }, function (error: any, counter: any): any {
    if (error) {
      return next(error);
    }
    doc.employeeID = counter.seq as number;
    next();
  });
});

const EmployeeModel = model<IEmployee & Document>('employee', employeeSchema);

export default EmployeeModel;
