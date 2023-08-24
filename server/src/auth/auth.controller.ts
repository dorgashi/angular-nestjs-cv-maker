import {
    Controller,
    Post,
    Body,
    Res,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { LoginUserDto } from '../user/dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private configService: ConfigService,
        private authService: AuthService
    ) {}
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async logIn(
        @Body() loginUserDto: LoginUserDto,
        @Res({ passthrough: true }) response: Response
    ): Promise<void> {
        const { token, maxAge, expires } = await this.authService.logIn(
            loginUserDto
        );

        response.cookie('angularnestjscvmaker_jwt', token, {
            maxAge,
            expires,
            httpOnly: true,
            domain: this.configService.get('domain'),
            secure: this.configService.get('isProduction'),
            sameSite: true,
        });
    }
}
