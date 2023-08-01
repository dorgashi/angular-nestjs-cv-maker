import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import path from 'path';

export const databaseConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [],
    synchronize: false,
    migrations: [`${path.join(__dirname, '..')}/**/migrations/*.ts`],
    migrationsTableName: process.env.MYSQL_MIGRATIONS_TABLE,
};
