import { TypeOrmModule } from '@nestjs/typeorm';

const env = process.env;

export const typeORMConfig: TypeOrmModule = {
  type: 'mysql',
  host: env.MYSQL_HOST,
  port: 3306,
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
  entities: [],
  synchronize: true,
};
