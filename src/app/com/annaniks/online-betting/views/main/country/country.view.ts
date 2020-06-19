import { Component } from "@angular/core";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';
import { AppService } from '../../../services/app.service';
import { Country } from '../../../models/country';

@Component({
    selector: 'country-view',
    templateUrl: 'country.view.html',
    styleUrls: ['country.view.scss']
})
export class CountryView {
    private _paramsSubscription: Subscription;
    public selectedCountry:Country
    constructor(private _activatedRoute: ActivatedRoute, private _mainService: MainService,
        private _appService: AppService) { }

    ngOnInit() {
        this._checkProductId()
    }

    private _checkProductId(): void {
        this._paramsSubscription = this._activatedRoute.params.subscribe((params) => {
            if (params && params.countryId) {
                let countries = this._mainService.getCountry()
                this.selectedCountry = this._appService.checkPropertyValue(this._appService.filterArray(countries, 'link', `/${params.sportTipe}/${params.countryId}/`),0);
            }

        })
    }

    ngOnDestroy() {
        this._paramsSubscription.unsubscribe()
    }
}