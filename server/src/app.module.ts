import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appConfig, databaseConfig } from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CvModule } from './cv/cv.module';
import { CvThemeModule } from './cv-theme/cv-theme.module';
import { databaseProviders } from './common/database/database.providers';
import { DatabaseModule } from './common/database/database.module';

@Module({
    imports: [
        ConfigModule.forRoot({ load: [appConfig], isGlobal: true }),
        TypeOrmModule.forRoot(databaseConfig),
        DatabaseModule,
        UserModule,
        CvModule,
        CvThemeModule,
    ],
    controllers: [AppController],
    providers: [AppService, ...databaseProviders],
})
export class AppModule {}
