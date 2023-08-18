import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import {
    HttpException,
    ValidationPipe,
    BadRequestException,
} from '@nestjs/common';
import { ValidationError } from 'class-validator';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            exceptionFactory: (
                validationErrors: ValidationError[] = []
            ): HttpException => {
                return new BadRequestException(
                    validationErrors.map(error => ({
                        field: error.property,
                        error: Object.values(error.constraints).join(', '),
                        failed_constraints: Object.keys(error.constraints),
                    }))
                );
            },
        })
    );

    app.setGlobalPrefix('/api');

    const configService = app.get<ConfigService>(ConfigService);
    const port = configService.get('port');

    const cookieSecret = configService.get('cookieSecret');
    app.use(cookieParser(cookieSecret));

    console.info(`Nest.js app running on port ${port}`);
    await app.listen(port);
}

bootstrap();
