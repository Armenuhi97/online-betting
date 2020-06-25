import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class UserSettingsService{
    constructor(private _httpClient:HttpClient){}

    public getContries(){
        return this._httpClient.get('assets/files/country-codes.json')
    }
    public updateClient(formData:FormData){
        let params = new HttpParams().set('isAuthorized', 'true');
        return this._httpClient.post(`client/`, formData, { params: params })
    }
}