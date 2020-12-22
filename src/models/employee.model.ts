import mongoose from 'mongoose';
import { model, Schema, Document } from 'mongoose';

import { IEmployee } from '../interfaces/employee.interface';

const CounterSchema = Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});
const counter = mongoose.model('counter', CounterSchema);

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
  const doc = this;
  counter.findByIdAndUpdate({ _id: 'entitiyID' }, { $inc: { seq: 1 } }, { new: true, upsert: true }, function (error, counter): any {
    if (error) {
      return next(error);
    }
    console.log(counter.seq, 'sequence');
    doc.employeeID = counter.seq;
    console.log(this, 'this');
    next();
  });
});

const EmployeeModel = model<IEmployee & Document>('employee', employeeSchema);

export default EmployeeModel;
