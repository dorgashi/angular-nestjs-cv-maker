import { DataSource, DataSourceOptions } from 'typeorm';
import { databaseConfig } from './database.config';
import * as path from 'path';

export default new DataSource({
    ...(databaseConfig as DataSourceOptions),
    migrations: [`${path.join(__dirname, '../..')}/src/migrations/*.ts`],
});
