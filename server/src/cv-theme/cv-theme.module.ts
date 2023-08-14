import {
    Module,
    NestModule,
    MiddlewareConsumer,
    RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from '../auth/auth.middleware';
import { CvThemeService } from './cv-theme.service';
import { CvThemeController } from './cv-theme.controller';
import { CvTheme } from './cv-theme.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([CvTheme]), AuthModule, UserModule],
    providers: [CvThemeService],
    controllers: [CvThemeController],
    exports: [CvThemeService],
})
export class CvThemeModule implements NestModule {
    public configure(consumer: MiddlewareConsumer): void {
        consumer
            .apply(AuthMiddleware)
            .forRoutes({ path: 'create', method: RequestMethod.POST });
    }
}
