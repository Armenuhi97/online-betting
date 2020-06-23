import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUpModel, SignInModel } from '../models/auth';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {
    private _isAuthorized: boolean = false;

    constructor(private _httpClient: HttpClient, private _cookieService: CookieService) { }

    public login(userData: SignInModel) {
        return this._httpClient.post('client-login/', userData)
    }

    public registration(userData: SignUpModel) {
        return this._httpClient.post('client/', userData)
    }

    public setAuthState(isAuthorized: boolean): void {
        this._isAuthorized = isAuthorized;
    }

    public getAuthStateSync(): boolean {
        return this._isAuthorized;
    }

    public checkAuthState(): Observable<boolean> {
        let headers = new HttpHeaders();
        // headers = headers.append('Cache-Control', 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0');
        // headers = headers.append('Pragma', 'no-cache');
        // headers = headers.append('Expires', '0');
        return this._httpClient.put('check-token', { token: this._cookieService.get('accessToken') })
            .pipe(
                map((response) => {
                    this.setAuthState(true);
                    return true;
                }),
                catchError((err) => {
                    console.log(err);

                    this.setAuthState(false);
                    // window.location.reload();
                    return throwError(false);
                })
            )
    }
}