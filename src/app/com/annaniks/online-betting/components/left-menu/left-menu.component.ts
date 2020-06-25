import { Component, OnInit, OnDestroy } from '@angular/core';
import { SportDetailService } from '../../services/sport-details.service';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Country, Liga } from '../../models/country';
import { MainService } from '../../views/main/main.service';
import { ServerResponse } from '../../models/model';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-left-menu',
    templateUrl: 'left-menu.component.html',
    styleUrls: ['left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit, OnDestroy {
    public isSelectCountry = false;
    public selectedLiga: Liga;
    public selectedCountry: Country;
    private _unsubscribe$ = new Subject<void>();
    constructor(
        private _mainService: MainService,
        private _activatedRoute: ActivatedRoute,
        private _appService: AppService,
        private _router: Router
    ) { }

    ngOnInit() {
        this._checkQueryParams();
    }

    private _checkQueryParams() {
        this._checkUrl(this._router.url);
        this._router.events
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this._checkUrl(event.url);
                }
            });
    }
    private _checkUrl(url) {
        if (url.startsWith('/liga') || url.startsWith('/country')) {
            if (url.startsWith('/liga')) {
                this._getUrl('/liga', url);
            } else {
                if (url.startsWith('/country')) {
                    this._getUrl('/country', url);
                    this.selectedLiga = null;
                }
            }
        } else {
            this.selectedLiga = null;
            this.selectedCountry = null;
            this.isSelectCountry = false;
        }

    }
    private _getUrl(deletedUrl: string, event) {
        const url = event.slice(5);
        url.replace(deletedUrl, '');
        const countries = this._mainService.getCountry();
        const countryUrlArray = url.split('/');
        const countryUrl = `/${countryUrlArray[1]}/${countryUrlArray[2]}/`;
        this.selectedCountry = this._appService.checkPropertyValue(this._appService.filterArray(countries, 'link', countryUrl), 0);
        if (this.selectedCountry) {
            this.isSelectCountry = true;
            if (deletedUrl === '/liga') {
                this.selectedLiga = this._appService.checkPropertyValue(this._appService.filterArray(this.selectedCountry.country_liga, 'link', `${url}/`), 0);
            }
        }
    }
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }

    get countries(): Country[] {
        return this._mainService.getCountry();
    }
}
