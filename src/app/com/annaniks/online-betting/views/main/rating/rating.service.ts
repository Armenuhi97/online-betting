import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class RatingService {
    constructor(private _httpClient: HttpClient) { }
    public getOrdering(ligaId?: number) {
        let mainUrl: string = `bet/ordering/`;
        let sendingUrl: string;
        if (ligaId) {
            sendingUrl = `${mainUrl}?liga_id=${ligaId}`
        } else {
            sendingUrl = mainUrl
        }
        const params = new HttpParams().set('isAuthorized', 'true');
        return this._httpClient.get(sendingUrl, { params })
    }

}