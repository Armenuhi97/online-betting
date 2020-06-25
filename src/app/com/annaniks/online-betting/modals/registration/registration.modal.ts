import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PasswordValidation } from '../../controls/control';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { SignUpModel } from '../../models/auth';

@Component({
    selector: 'app-registration-modal',
    templateUrl: 'registration.modal.html',
    styleUrls: ['registration.modal.scss']
})
export class RegistrationModalComponent implements OnInit, OnDestroy {
    public registrationForm: FormGroup;
    private _unsubscribe$ = new Subject<void>();

    constructor(
        private _fb: FormBuilder,
        private _loginService: LoginService,
        private _cookieService: CookieService,
        private _dialogRef: MatDialogRef<RegistrationModalComponent>
    ) { }

    ngOnInit() {
        this._validate();
    }

    private _validate(): void {
        this.registrationForm = this._fb.group({
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            email: [null, [Validators.required, Validators.email,
            Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/)]],
            password: [null, Validators.required],
            confirmPassword: [null, Validators.required],
            isAgree: [false, Validators.requiredTrue]
        }, { validator: PasswordValidation.MatchPassword });
    }

    public close(): void {
        this._dialogRef.close(false);
    }

    public registration(): void {
        const formValue = this.registrationForm.value;
        const sendingData: SignUpModel = {
            user: {
                email: formValue.email,
                first_name: formValue.firstName,
                last_name: formValue.lastName,
                password: formValue.password
            }
        };
        this._loginService.registration(sendingData)
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data: any) => {
                this._cookieService.set('accessToken', data.access);
                this._dialogRef.close(true);
            });
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }

}

