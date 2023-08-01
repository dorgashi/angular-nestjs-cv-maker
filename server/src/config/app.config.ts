interface AppConfigRO {
    port: number;
    database: {
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
    };
}

export const appConfig = (): AppConfigRO => ({
    port: Number(process.env.PORT) || 3000,
    database: {
        host: process.env.MYSQL_HOST,
        port: Number(process.env.MYSQL_PORT),
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    },
});
