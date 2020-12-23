# Zetwerk - CRUD Project

The project is a MEAN stack project for Employee Management

Following are the Features:

  - Ability to create new Employees
  - Count of Employees auto-increment on save
  - Photo for an employee can be added
  - The same can be retrieved from a Searchbar
  - Addition to pagination support when listing all the employees
  - Ability to Search the Employees
  - Ability to Delete Employees
  - Ability to Edit employee information
  - Ability to sort on Frontend - on the bases of EmployeeID and Salary `(Additional)`
  - The Application is Dockerized and all dependencies can be started using - `docker-compose up` It would server from behind a `nginx` container
  - 
  
## Status Codes
- 200 - Success
- 201 - Created
- 404 - Entity not found
- 422 - Unprocessable entity
- 500 - Internal Server Error
 

# API Information

 - Create User
    - URL: `POST /api/v1/employee-management/employee`
    - Body - Raw `Required`
        - {
    "name": "Kakkad",
    "dob": "26-06-1997",
    "salary": 350000,
    "skills": ["nodejs","mongoDB"]
        }

 - Add Employee Photo
    - URL: `PATCH /api/v1/employee-management/employee/photo`
    - Body - Form Data - `Required`
        - upload
        - EmployeeID (to Update)
        
- Delete Employee Profile
    - Redquired: `id in URL params`
    - URL: `DELETE /api/v1/employee-management/employee/:id`

- Get All Employees
    - URL: `GET /api/v1/employee-management/list`

- Get Employee By Employee ID
    - URL: `GET /api/v1/employee-management/employee/:id`

- Update Employee Details
    - URL: `PATCH /api/v1/employee-management/employee/:id`
    - Body - Form Data - `Required`
        - Field - to be updated
        - Value - by this value

- Get Employee Photo
    - URL `GET /api/v1/employee-management/employee/:id/photo`




