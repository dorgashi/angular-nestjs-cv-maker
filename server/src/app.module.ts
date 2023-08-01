import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appConfig, databaseConfig } from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';
import { Database } from './database/database';
import { Database } from './providers/database/database';
import { Database } from './common/database/database.providers';
import { DatabaseModule } from './common/database/database.module';

@Module({
    imports: [
        ConfigModule.forRoot({ load: [appConfig] }),
        TypeOrmModule.forRoot(databaseConfig),
        AuthModule,
        DatabaseModule,
    ],
    controllers: [AppController, UserController],
    providers: [AppService, UserService, Database],
})
export class AppModule {}
