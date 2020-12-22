import { RequestHandler } from 'express';
import HttpException from '../exceptions/HttpException';
import { mongoFieldValueCheck } from '../utils/utils';

const mongoFieldValidation = (): RequestHandler => {
  return (req, res, next) => {
    if (mongoFieldValueCheck(req.body.field)) {
      next();
    } else {
      throw new HttpException(403, 'The specified field to update does not exist in the Database');
    }
  };
};

export default mongoFieldValidation;
