import { DataSource } from 'typeorm';
import dataSource from '../../config/datasource.config';

export const databaseProviders = [
    {
        provide: DataSource,
        useFactory: async (): Promise<DataSource> => {
            try {
                if (!dataSource.isInitialized) {
                    await dataSource.initialize();
                }
            } catch (error) {
                console.error(error?.message);
            }

            return dataSource;
        },
    },
];
