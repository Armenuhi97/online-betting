import { Component, OnInit, OnDestroy } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PasswordValidation } from '../../controls/control';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'registration-modal',
    templateUrl: 'registration.modal.html',
    styleUrls: ['registration.modal.scss']
})
export class RegistrationModal implements OnInit, OnDestroy {
    public registrationForm: FormGroup;
    unsubscribe$ = new Subject<void>()
    constructor(private _fb: FormBuilder,
        private _loginService: LoginService,
        private _cookieService: CookieService,
        private _dialogRef: MatDialogRef<RegistrationModal>,) { }

    ngOnInit() {
        this._validate()
    }
    private _validate(): void {
        this.registrationForm = this._fb.group({
            name: [null, Validators.required],
            surname: [null, Validators.required],
            email: [null, [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/)]],
            password: [null, Validators.required],
            confirmPassword: [null, Validators.required],
            isAgree: [false]
        },
            {
                validator: PasswordValidation.MatchPassword
            })
    }
    public close(): void {
        this._dialogRef.close(false)
    }
    public registration(): void {
        this._loginService.registration(this.registrationForm.value).pipe(takeUntil(this.unsubscribe$)).subscribe((data: any) => {
            this._cookieService.set('accessToken', data.access);
            this._dialogRef.close(true)
        })
    }
    ngOnDestroy() {
        this.unsubscribe$.next()
        this.unsubscribe$.complete()
    }
    get isValid(): boolean {
        console.log((this.registrationForm.valid && this.registrationForm.get('isAgree').value));
        
        return (this.registrationForm.valid && this.registrationForm.get('isAgree').value)
    }
}