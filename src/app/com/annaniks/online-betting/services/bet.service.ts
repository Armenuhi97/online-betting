import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SendBetsModel } from '../models/bet';

@Injectable({
    'providedIn': 'root'
})
export class BetService {

    constructor(private _httpClient: HttpClient) { }

    public sendBets(bets: SendBetsModel[]) {
        return this._httpClient.post('bet/', { list: bets })
    }


}