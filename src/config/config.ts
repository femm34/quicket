import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    appPort: process.env.PORT,
    databaseUsername: process.env.DATABASE_USERNAME,
    databasePassword: process.env.DATABASE_PASSWORD,
    dbPort: process.env.DATABASE_PORT,
    dbName: process.env.DATABASE_NAME,
    dbHost: process.env.DATABASE_HOST,
    dbType: process.env.DATABASE_TYPE,
  };
});
