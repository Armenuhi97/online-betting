import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiType } from '../models/response';
import { Country } from '../models/country';

@Injectable({
    providedIn: 'root'
})
export class SportDetailService {

    constructor(private _httpClient: HttpClient) { }

    public getAllLigues(): any {//: Observable<ApiType<Country>>
        return this._httpClient.get(`country/?page_size=200`,)
    }
}