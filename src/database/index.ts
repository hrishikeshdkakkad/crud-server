import { connect } from 'mongoose';

import { config } from '../config/app.config';
import { logger } from '../utils/logger';
import { employeeSchema } from '../models/employee.model';

export let connection;

export const dbConnection = () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };

  connect(config.db.url, options)
    .then(() => {
      logger.info('🟢 The database is connected.');
    })
    .catch(() => {
      logger.error(`🔴 Unable to connect to the database: ${error}.`);
    });
};
