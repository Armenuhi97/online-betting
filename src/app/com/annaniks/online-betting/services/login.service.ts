import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUpModel, SignInModel } from '../models/auth';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { MainService } from '../views/main/main.service';

@Injectable()
export class LoginService {
    private _isAuthorized = false;
    public authorizedEvent$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private _httpClient: HttpClient, private _cookieService: CookieService) { }

    public login(userData: SignInModel) {
        return this._httpClient.post('client-login/', userData);
    }

    public registration(userData: SignUpModel) {
        return this._httpClient.post('client/', userData);
    }

    public setAuthState(isAuthorized: boolean): void {
        this._isAuthorized = isAuthorized;
    }

    public getAuthStateSync(): boolean {
        return this._isAuthorized;
    }

    public getAuthState(): Observable<boolean> {
        return this.authorizedEvent$.asObservable();
    }

    public checkAuthState(): Observable<boolean> {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', `Bearer ${this._cookieService.get('accessToken')}`);
        return this._httpClient.get('check-token/', { headers })
            .pipe(
                map((response) => {
                    console.log(response);

                    this.setAuthState(true);
                    this.authorizedEvent$.next(true);
                    return true;
                }),
                catchError((err) => {
                    this.setAuthState(false);
                    this.authorizedEvent$.next(false);
                    return throwError(false);
                })
            );
    }
}
