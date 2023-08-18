const validEnvNames = ['development', 'staging', 'production'];

interface AppConfig {
    env: string;
    isProduction: boolean;
    port: number;
    domain: string;
    database: {
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
    };
    jwtSecret: string;
    cookieSecret: string;
}

function isValidEnv(env: string): boolean {
    return validEnvNames.includes(env);
}

export const appConfig = (): AppConfig => ({
    env: isValidEnv(process.env.ENVIRONMENT)
        ? process.env.ENVIROMENT
        : 'development',
    isProduction: process.env.ENVIRONMENT == 'production',
    port: Number(process.env.PORT) || 3000,
    domain: process.env.DOMAIN,
    database: {
        host: process.env.MYSQL_HOST,
        port: Number(process.env.MYSQL_PORT),
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    },
    jwtSecret: process.env.JWT_SECRET,
    cookieSecret: process.env.COOKIE_SECRET,
});
