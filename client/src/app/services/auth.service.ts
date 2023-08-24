import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    http: HttpClient;
    constructor(private httpClient: HttpClient) {
        this.http = httpClient;
    }

    public login(email: string, password: string): Observable<object> {
        return this.http.post(
            `${environment.apiUrl}/auth/login`,
            { email, password },
            {
                observe: 'response',
                responseType: 'json',
            }
        );
    }
}
