import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';
import { AppService } from '../../../services/app.service';
import { Country } from '../../../models/country';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-country-view',
    templateUrl: 'country.view.html',
    styleUrls: ['country.view.scss']
})
export class CountryViewComponent implements OnInit, OnDestroy {
    private _paramsSubscription: Subscription;
    public selectedCountry: Country;
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _mainService: MainService,
        private _appService: AppService,
        private _title: Title
    ) { }

    ngOnInit() {
        this._checkProductId();
    }

    private _checkProductId(): void {
        this._paramsSubscription = this._activatedRoute.params.subscribe((params) => {
            if (params && params.countryId) {
                const countries = this._mainService.getCountry();
                this.selectedCountry = this._appService.checkPropertyValue(this._appService.filterArray(countries, 'link', `/${params.sportType}/${params.countryId}/`), 0);
                if (this.selectedCountry) {
                    this._title.setTitle(this.selectedCountry.name);
                }
            }

        });
    }

    ngOnDestroy() {
        this._paramsSubscription.unsubscribe();
    }
}
