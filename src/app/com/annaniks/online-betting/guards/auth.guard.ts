import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private _loginService: LoginService,
        private _cookeService: CookieService,
        private _router: Router
    ) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (!this._cookeService.get('accessToken')) {
            this._router.navigate(['/']);
            return false;
        }
        return this._loginService.checkAuthState();
    }
}
