import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { UserService } from '../user/user.service';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from '../user/user.entity';

type JwtPayload = {
    sub: number;
    [key: string]: any;
} | null;

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async logIn(
        loginUserDto: LoginUserDto
    ): Promise<{ token: string; maxAge: number; expires: Date }> {
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
        const maxAge = 3600;
        const now = new Date();
        now.setTime(now.getTime() + maxAge * 1000); // +1 hour

        return {
            token: await this.jwtService.signAsync(payload),
            maxAge,
            expires: now,
        };
    }

    decodeToken(token: string): JwtPayload | null {
        const decoded = this.jwtService.decode(token, {
            json: true,
        }) as JwtPayload;

        if (!decoded || !decoded.sub) return null;

        return decoded;
    }

    async verifyTokenAndRetrieveUser(token: string): Promise<User | boolean> {
        try {
            const valid = await this.jwtService.verify(token);

            if (!valid) return false;

            const decoded = this.decodeToken(token);

            if (!decoded) return false;

            return this.userService.findById(decoded.sub);
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}
