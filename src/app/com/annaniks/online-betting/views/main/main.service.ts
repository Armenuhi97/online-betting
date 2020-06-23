import { Injectable } from "@angular/core";
import { Country } from '../../models/country';
import { SportDetailService } from '../../services/sport-details.service';
import { takeUntil, map } from 'rxjs/operators';
import { ServerResponse } from '../../models/model';
import { Subject, Observable } from 'rxjs';

@Injectable()

export class MainService {
    private _isAuthorizated: boolean = false;
    private _countries: Country[] = [];

    constructor(private _sportDetailsService: SportDetailService) { }


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

    get isAuthorizated() {
        return this._isAuthorizated
    }
}