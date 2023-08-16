import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import {
    HttpException,
    ValidationPipe,
    BadRequestException,
} from '@nestjs/common';
import { ValidationError } from 'class-validator';

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(
        new ValidationPipe({
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

    console.info(`Nest.js app running on port ${port}`);
    await app.listen(port);
}

bootstrap();
