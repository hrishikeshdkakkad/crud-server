import multer from 'multer';

import HttpException from '../exceptions/HttpException';

export const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb: CallableFunction): any {
    if (!file.originalname.match(/\.(jpg|png)$/)) {
      return cb(new HttpException(422, 'File must be jpg or png'));
    }
    cb(undefined, true);
  },
});
