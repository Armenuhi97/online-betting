import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MyTournamentService {
    constructor(private _httpClient: HttpClient) { }
    public getMyTournament(userId: number) {
        let params = new HttpParams().set('isAuthorized', 'true');
        return this._httpClient.get(`client-get/me/turs/${userId}`, { params })
    }
}