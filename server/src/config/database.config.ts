import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { User } from '../user/user.entity';
import { Cv } from '../cv/cv.entity';
import { CvTheme } from '../cv-theme/cv-theme.entity';

dotenv.config();

export const databaseConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [User, Cv, CvTheme],
    synchronize: false,
    migrations: [`${path.join(__dirname, '../..')}/dist/migrations/*.ts`],
    migrationsTableName: process.env.MYSQL_MIGRATIONS_TABLE,
};
