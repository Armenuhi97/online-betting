import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserSettingsService{
    constructor(private _httpClient:HttpClient){}

    public getContries(){
        return this._httpClient.get('assets/files/country-codes.json')
    }
}