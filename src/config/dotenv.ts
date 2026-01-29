import dotenv from 'dotenv';

dotenv.config();

const secrets = {
  port: process.env.PORT || 3000,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://admin:admin@localhost:27017',
  mongodbDb: process.env.MONGODB_DB || 'default',
};

export default secrets;
