import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) {}

    canActivate(context: ExecutionContext): boolean | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const bearer = request.headers.authorization;

        if (!bearer) return false;

        const token = bearer.split(' ')[1];

        return new Observable<boolean>(observer => {
            this.authService.verifyTokenAndRetrieveUser(token).then(user => {
                if (user) {
                    request.currentUser = user;
                    observer.next(true);
                } else {
                    observer.next(false);
                }
                observer.complete();
            });
        });
    }
}
