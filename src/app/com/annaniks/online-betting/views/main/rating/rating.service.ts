import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RatingService {
    constructor(private _httpClient: HttpClient) { }
    public getOrdering() {
        return this._httpClient.get('bet/ordering/')
    }

}