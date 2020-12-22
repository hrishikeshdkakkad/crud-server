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
