import { DataSource } from 'typeorm';
import dataSource from '../../config/datasource.config';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async (): Promise<DataSource> => {
            return dataSource.initialize();
        },
    },
];
