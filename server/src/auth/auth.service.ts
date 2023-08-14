import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { UserService } from '../user/user.service';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async logIn(loginUserDto: LoginUserDto): Promise<{ access_token: string }> {
        const user = await this.userService.findByEmail(loginUserDto.email);
        try {
            const valid = await argon2.verify(
                user.password,
                loginUserDto.password
            );
            if (!valid) throw new UnauthorizedException();
        } catch (err) {
            throw new UnauthorizedException();
        }

        const payload = { sub: user.id, username: user.username };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    decodeToken(token: string): string | { [key: string]: any } | null {
        return this.jwtService.decode(token, { json: true });
    }
}
