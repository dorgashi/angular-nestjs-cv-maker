import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, catchError, EMPTY } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-auth-modal',
    templateUrl: './auth-modal.component.html',
    styleUrls: ['./auth-modal.component.scss'],
})
export class AuthModalComponent {
    public formError: string | boolean = false;

    public loginForm = this.formBuilder.group({
        email: '',
        password: '',
    });

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {}

    private handleError(error: HttpErrorResponse): Observable<never> {
        if (error.status == 401) {
            this.formError = 'Email or password incorrect';
        } else {
            this.formError = 'Something went wrong';
        }

        return EMPTY;
    }

    hideFormError(): void {
        this.formError = false;
    }

    onSubmit(): void {
        if (!this.loginForm.value.email || !this.loginForm.value.password)
            return;

        this.authService
            .login(this.loginForm.value.email, this.loginForm.value.password)
            .pipe(catchError(this.handleError.bind(this)))
            .subscribe((data: object): void => {
                console.log(data);
            });
    }
}
