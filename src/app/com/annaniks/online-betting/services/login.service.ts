import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
    constructor(private _httpClient: HttpClient) { }

    public login(email: string, name: string, password: string) {
        return this._httpClient.post('', { email: email, name: name, password: password })
    }
    public registration(body) {
        return this._httpClient.post('', body)
    }
}