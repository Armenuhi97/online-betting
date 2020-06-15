import { Component } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'base-view',
    templateUrl: 'base.view.html',
    styleUrls: ['base.view.scss']
})
export class BaseView {
    public loginForm: FormGroup;
    unsubscribe$ = new Subject<void>()
    constructor(private _fb: FormBuilder,
        private _loginService: LoginService,
        private _cookieService: CookieService,
        private _router: Router
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

    public login(): void {
        this._loginService.login(this.loginForm.get('email').value, this.loginForm.get('password').value).pipe(takeUntil(this.unsubscribe$)).subscribe((data: any) => {
            this._cookieService.set('accessToken', data.access);
            this._router.navigate(['/'])
        })

    }
    ngOnDestroy() {
        this.unsubscribe$.next()
        this.unsubscribe$.complete()
    }
}