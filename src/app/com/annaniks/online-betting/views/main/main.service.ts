import { Injectable } from "@angular/core";
import { Country } from '../../models/country';
import { SportDetailService } from '../../services/sport-details.service';
import { takeUntil, map } from 'rxjs/operators';
import { ServerResponse } from '../../models/model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../models/user';

@Injectable({
    'providedIn': 'root'
})
export class MainService {
    private _isAuthorizated: boolean = false;
    private _countries: Country[] = [];

    constructor(private _sportDetailsService: SportDetailService, private _httpClient: HttpClient) { }


    public getAllCountries(): Observable<ServerResponse<Country[]>> {
        return this._sportDetailsService.getAllLigues()
            .pipe(
                map((response: ServerResponse<Country[]>) => {
                    this._countries = response.results;
                    console.log(response);
                    return response
                }))
    }

    public getCountry(): Country[] {
        return this._countries
    }

    public changeAuthorizated(value: boolean) {
        this._isAuthorizated = value
    }

    public getMe(): Observable<any> {
        return this._httpClient.get('client-get/me/').pipe(
            map((response: any) => {
                localStorage.setItem("bet-user", JSON.stringify(response.data[0]))
                return response
            })
        )
    }

    get isAuthorizated() {
        return this._isAuthorizated
    }
}