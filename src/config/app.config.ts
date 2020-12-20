import 'dotenv/config';
const { MONGO_HOST, MONGO_PORT, MONGO_DATABASE } = process.env;

export const config = {
  application: {
    environment: (process.env.NODE_ENV as string) || 'development',
    PORT: process.env.PORT,
  },
  db: {
    url: `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}` as string,
  },
};
