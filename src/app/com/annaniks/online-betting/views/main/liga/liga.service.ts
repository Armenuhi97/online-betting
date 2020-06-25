import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../../../services';

@Injectable()
export class LigaService {
    constructor(private _httpClient: HttpClient, private _loginService: LoginService) { }

    public getTables(ligaId: number): any {//: Observable<ApiType<Country>>
        return this._httpClient.get(`team/?liga=${ligaId}`,)
    }
    public getCalendares(ligaId: number): any {//: Observable<ApiType<Country>>
        return this._httpClient.get(`calendar/?liga=${ligaId}`,)
    }
    public getTour(ligaId: number) {
        return this._httpClient.get(`tur/?liga=${ligaId}`)
    }
    public getMatch(tourId: number) {
        let reqUrl = `match/?tur=${tourId}`
        console.log(this._loginService.getAuthStateSync());

        if (this._loginService.getAuthStateSync()) {
            reqUrl = `match-bet/?tur=${tourId}`
        }
        return this._httpClient.get(reqUrl)
    }
}