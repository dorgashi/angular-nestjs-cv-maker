import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';

if (!process.env.JWT_SECRET) {
    throw new Error('Must provide JWT_SECRET in your .env file');
}

@Module({
    imports: [
        UserModule,
        JwtModule.register({ secret: process.env.JWT_SECRET }),
    ],
    exports: [AuthService],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
