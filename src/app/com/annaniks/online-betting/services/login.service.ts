import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
    constructor(private _httpClient: HttpClient) { }

    public login(email: string, password: string) {
        return this._httpClient.post('', { email: email, password: password })
    }
    public registration(body) {
        return this._httpClient.post('', body)
    }
}