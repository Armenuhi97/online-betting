import { Injectable } from '@angular/core';
import { CanLoad, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private _loginService: LoginService,
    ) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return this._loginService.checkAuthState();
    }
}