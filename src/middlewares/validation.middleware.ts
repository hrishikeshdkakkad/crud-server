import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';

const validationMiddleware = (type: any, value: any | 'body' | 'query' | 'params' = 'body', skipMissingProperties = false) => {
  return (req: any, res: Response, next: NextFunction) => {
    validate(plainToClass(type, req[value]), { skipMissingProperties }).then((errors: ValidationError[]): void => {
      if (errors.length > 0) {
        const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
        next(new HttpException(400, message));
      } else {
        next();
      }
    });
  };
};

export default validationMiddleware;
