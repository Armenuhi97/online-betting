import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LigaService {
    constructor(private _httpClient: HttpClient) { }

    public getTables(ligaId: number): any {//: Observable<ApiType<Country>>
        return this._httpClient.get(`team/?liga=${ligaId}`,)
    }
    public getCalendares(ligaId: number): any {//: Observable<ApiType<Country>>
        return this._httpClient.get(`calendar/?liga=${ligaId}`,)
    }
    public getTour(ligaId:number) {
        return this._httpClient.get(`tur/?liga=${ligaId}`)
    }
    public getMatch(tourId:number) {
        return this._httpClient.get(`match/?tur=${tourId}`)
    }
}