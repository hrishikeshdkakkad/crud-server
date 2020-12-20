import { NextFunction, Request, Response, Router } from 'express';
const router = Router();

export default router.get('/users', (req: Request, res: Response, next: NextFunction) => {
  res.send('This is v1 Route - test pass');
});
