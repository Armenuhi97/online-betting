import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from '../../services/login.service';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'login-modal',
    templateUrl: 'login.modal.html',
    styleUrls: ['login.modal.scss']
})
export class LoginModal implements OnInit, OnDestroy {
    public loginForm: FormGroup;
    unsubscribe$ = new Subject<void>()
    constructor(private _fb: FormBuilder,
        private _loginService: LoginService,
        private _cookieService: CookieService,
        private _dialogRef: MatDialogRef<LoginModal>, ) { }

    ngOnInit() {
        this._validate()
    }
    private _validate(): void {
        this.loginForm = this._fb.group({
            email: [null, [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/)]],
            password: [null, Validators.required]
        })
    }
    public close(): void {
        this._dialogRef.close(false)
    }
    public login(): void {
        this._loginService.login(this.loginForm.get('email').value, this.loginForm.get('password').value).pipe(takeUntil(this.unsubscribe$)).subscribe((data: any) => {
            this._cookieService.set('accessToken', data.access);
            this._dialogRef.close(true)
        })
       
    }
    ngOnDestroy() {
        this.unsubscribe$.next()
        this.unsubscribe$.complete()
    }
}