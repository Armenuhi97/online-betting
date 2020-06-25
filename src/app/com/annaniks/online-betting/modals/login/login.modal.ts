import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from '../../services/login.service';
import { Subscription, Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { SignInModel } from '../../models/auth';
import { LoadingService } from '../../services';

@Component({
    selector: 'login-modal',
    templateUrl: 'login.modal.html',
    styleUrls: ['login.modal.scss']
})
export class LoginModal implements OnInit, OnDestroy {
    public loginForm: FormGroup;
    private _unsubscribe$ = new Subject<void>()

    constructor(
        private _fb: FormBuilder,
        private _loginService: LoginService,
        private _cookieService: CookieService,
        private _dialogRef: MatDialogRef<LoginModal>,
        private _loadingService: LoadingService
    ) { }

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
        this._loadingService.showLoading();
        const formValue = this.loginForm.value;
        const sendingData: SignInModel = {
            username: formValue.email,
            password: formValue.password
        }
        this._loginService.login(sendingData)
            .pipe(
                takeUntil(this._unsubscribe$),
                finalize(() => this._loadingService.hideLoading())
            )
            .subscribe((data: any) => {
                this._cookieService.set('accessToken', data.access);
                this._cookieService.set('refreshToken', data.refresh);
                // this._loginService.authorizedEvent$.next(true);
                // this._dialogRef.close(true);
                window.location.reload();
            })

    }

    ngOnDestroy() {
        this._unsubscribe$.next()
        this._unsubscribe$.complete()
    }
}