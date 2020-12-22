import { Router } from 'express';

import { EmployeeController } from '../../controllers/employee.controller';
import { CreateEmployeeDto } from '../../dtos/employee.dto';
import { upload } from '../../middlewares/image.middleware';
import mongoFieldValidation from '../../middlewares/mongoValidation.middleware';
import validationMiddleware from '../../middlewares/validation.middleware';

const router = Router();

router.get('/employee-management/list', EmployeeController.getAllEmployees);
router.get('/employee-management/employee/:id', EmployeeController.getEmployee);
router.post('/employee-management/employee', validationMiddleware(CreateEmployeeDto, 'body'), EmployeeController.addEmployee);
router.patch('/employee-management/employee/photo', upload.single('upload'), EmployeeController.addEmployeePhoto);
router.patch('/employee-management/employee/:id', mongoFieldValidation(), EmployeeController.updateEmployeeInformation);
router.delete('/employee-management/employee/:id', EmployeeController.deleteEmployee);

export default router;
