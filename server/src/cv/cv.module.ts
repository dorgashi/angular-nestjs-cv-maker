import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from '../auth/auth.middleware';
import { CvService } from './cv.service';
import { CvController } from './cv.controller';
import { Cv } from './cv.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([Cv]), AuthModule, UserModule],
    providers: [CvService],
    controllers: [CvController],
    exports: [CvService],
})
export class CvModule implements NestModule {
    public configure(consumer: MiddlewareConsumer): void {
        consumer.apply(AuthMiddleware).forRoutes(CvController);
    }
}
