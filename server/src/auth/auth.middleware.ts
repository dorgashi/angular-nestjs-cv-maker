import {
    Injectable,
    NestMiddleware,
    UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
    ) {}

    async use(req: Request, res: Response, next: NextFunction): Promise<void> {
        const authHeader = req.header('authorization');

        if (!authHeader) {
            throw new UnauthorizedException();
        }

        const bearerToken: string[] = authHeader.split(' ');
        const token: string = bearerToken[1];

        const decoded = this.authService.decodeToken(token);

        if (!decoded) {
            throw new UnauthorizedException();
        }

        const currentUser = await this.userService.findById(decoded.sub);

        if (!currentUser) {
            throw new UnauthorizedException();
        }

        (req as any).currentUser = currentUser;

        next();
    }
}
