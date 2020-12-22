import { Router } from 'express';
import { EmployeeController } from '../../controllers/employee.controller';

const router = Router();

export default router.get('/employee-management/list', EmployeeController.getAllEmployees);
export default router.get('/employee-management/employee/:id', EmployeeController.getEmployee);
export default router.post('/employees-management/employee', EmployeeController.addEmployee);
export default router.patch('/employees-management/employee/:id', EmployeeController.updateEmployeeInformation);
export default router.delete('/employee-management/employee/:id', EmployeeController.deleteEmployee);
