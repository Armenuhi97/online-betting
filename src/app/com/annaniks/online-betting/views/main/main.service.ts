import { Injectable } from '@angular/core';
import { Country } from '../../models/country';
import { SportDetailService } from '../../services/sport-details.service';
import { map } from 'rxjs/operators';
import { ServerResponse } from '../../models/model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MainService {
    private _countries: Country[] = [];

    constructor(private _sportDetailsService: SportDetailService, private _httpClient: HttpClient) { }


    public getAllCountries(): Observable<ServerResponse<Country[]>> {
        return this._sportDetailsService.getAllLigues()
            .pipe(
                map((response: ServerResponse<Country[]>) => {
                    this._countries = response.results;
                    // console.log(response);
                    return response;
                }));
    }

    public getCountry(): Country[] {
        return this._countries;
    }

    public getMe(): Observable<any> {
        return this._httpClient.get('client-get/me/').pipe(
            map((response: any) => {
                localStorage.setItem('bet-user', JSON.stringify(response.data));
                return response;
            })
        );
    }
}
