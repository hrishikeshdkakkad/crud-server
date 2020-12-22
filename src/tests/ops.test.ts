// import { Todos } from '../services/employee.service';
// import { connect, clearDatabase, closeDatabase } from './setup';

// beforeAll(async () => await connect());

// /**
//  * Clear all test data after every test.
//  */
// afterEach(async () => await clearDatabase());

// /**
//  * Remove and close the db and server.
//  */
// afterAll(async () => await closeDatabase());

// describe('MongoDB insertion test', () => {
//   const todo = new Todos();
//   it('Should allow to add in a todo', async () => {
//     expect(async () => await todo.saveTodo({ detail: 'Eat Food', status: true })).not.toThrow();
//   });

//   it('Should get us a todo', async () => {
//     expect(async () => await todo.getTodo()).not.toThrow();
//   });
// });
