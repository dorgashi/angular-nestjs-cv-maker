import { Controller, Post, Body } from '@nestjs/common';
import { LoginUserDto } from '../user/dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Post('login')
    async logIn(
        @Body() loginUserDto: LoginUserDto
    ): Promise<{ access_token: string }> {
        return this.authService.logIn(loginUserDto);
    }
}
