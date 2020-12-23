import { RequestHandler } from 'express';
import HttpException from '../exceptions/HttpException';
import { isValidDateChecker } from '../utils/utils';

const isValidDate = (): RequestHandler => {
  return (req, res, next) => {
    if (isValidDateChecker(req.body.dob)) {
      next();
    } else {
      throw new HttpException(403, 'Date is not in DD/MM/YYYY format');
    }
  };
};

export default isValidDate;
