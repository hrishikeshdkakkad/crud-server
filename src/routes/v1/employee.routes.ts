import { Router } from 'express';

import { EmployeeController } from '../../controllers/employee.controller';
import { CreateEmployeeDto } from '../../dtos/employee.dto';
import { upload } from '../../middlewares/image.middleware';
import mongoFieldValidation from '../../middlewares/mongoValidation.middleware';
import validationMiddleware from '../../middlewares/validation.middleware';
import isValidDate from '../../middlewares/validDate.middleware';

const router = Router();

router.get('/employee-management/list', EmployeeController.getAllEmployees);
router.get('/employee-management/employee/:id', EmployeeController.getEmployee);
router.get('/employee-management/employee/:id/photo', EmployeeController.getEmployeeImage);
router.post('/employee-management/employee', validationMiddleware(CreateEmployeeDto, 'body'), isValidDate(), EmployeeController.addEmployee);
router.patch('/employee-management/employee/photo', upload.single('upload'), EmployeeController.addEmployeePhoto);
router.patch('/employee-management/employee/:id', mongoFieldValidation(), EmployeeController.updateEmployeeInformation);
router.delete('/employee-management/employee/:id', EmployeeController.deleteEmployee);

export default router;
