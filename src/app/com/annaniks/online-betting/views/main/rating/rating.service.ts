import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class RatingService {
    constructor(private _httpClient: HttpClient) { }
    public getOrdering() {
        const params = new HttpParams().set('isAuthorized', 'true');
        return this._httpClient.get('bet/ordering/', { params })
    }

}