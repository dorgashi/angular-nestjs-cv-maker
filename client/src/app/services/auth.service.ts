import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    http: HttpClient;
    constructor(private httpClient: HttpClient) {
        this.http = httpClient;
    }

    public login(username: string, password: string): void {
        // this.http.get({
        //     headers?: HttpHeaders | {[header: string]: string | string[]},
        //     observe?: 'body' | 'events' | 'response',
        //     params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
        //     reportProgress?: boolean,
        //     responseType?: 'arraybuffer'|'blob'|'json'|'text',
        //     withCredentials?: boolean,
        //   });
    }
}
