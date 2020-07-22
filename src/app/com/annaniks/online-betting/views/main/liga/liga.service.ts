import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoginService } from '../../../services';

@Injectable()
export class LigaService {
    constructor(private _httpClient: HttpClient, private _loginService: LoginService) { }

    public getTables(ligaId: number): any {
        return this._httpClient.get(`team/?liga=${ligaId}`);
    }
    public getCalendares(ligaId: number): any {
        return this._httpClient.get(`calendar/?liga=${ligaId}`);
    }
    public getTour(ligaId: number) {
        return this._httpClient.get(`tur/?liga=${ligaId}`);
    }
    public getMatch(tourId: number) {
        let reqUrl = `match/?tur=${tourId}`;
        if (this._loginService.getAuthStateSync()) {
            reqUrl = `match-bet/?tur=${tourId}`;
        }
        return this._httpClient.get(reqUrl);
    }
    public getTourCount(tourId: number) {
        let params = new HttpParams().set('isAuthorized', 'true');
        return this._httpClient.get(`bet/tur-count/${tourId}`, { params })
    }
    public getLigaCount(ligaId: number) {
        let params = new HttpParams().set('isAuthorized', 'true');
        return this._httpClient.get(`bet/liga-count/${ligaId}`, { params })
    }
    public getUserPlace(ligaId:number) {
        let params = new HttpParams().set('isAuthorized', 'true');
        return this._httpClient.get(`bet/custom/user/place/${ligaId}`, { params })
    }

}
