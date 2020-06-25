import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Subject, forkJoin, Observable } from 'rxjs';
import { MainService } from '../main.service';
import { AppService } from '../../../services/app.service';
import { Liga } from '../../../models/country';
import { LigaService } from './liga.service';
import { map, finalize } from 'rxjs/operators';
import { ServerResponse, Team, Tour } from '../../../models/model';
import { LoadingService } from '../../../services';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-liga-view',
    templateUrl: 'liga.view.html',
    styleUrls: ['liga.view.scss']
})
export class LigaViewComponent implements OnInit, OnDestroy {
    public tours: Tour[] = [];
    public calendares = [];
    public selectedTour = 0;
    private _paramsSubscription: Subscription;
    public liga: Liga;
    public activeTabItem = 'calendar';
    public tables: Team[] = [];
    private _subscription: Subscription;
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _ligaService: LigaService,
        private _loadingService: LoadingService,
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
                const seletedCountry = this._appService.filterArray(countries, 'link', `/${params.sportType}/${params.countryId}/`);
                if (params.ligaName) {
                    if (seletedCountry && seletedCountry[0] && seletedCountry[0].country_liga) {
                        this.liga = this._appService.checkPropertyValue(this._appService.filterArray(seletedCountry[0].country_liga, 'link', `/${params.sportType}/${params.countryId}/${params.ligaName}/`), 0);
                        if (this.liga) {
                            this._title.setTitle(this.liga.liga);
                        }
                        if (this.liga) {
                            this._combineObservable();
                        }
                    }
                }

            }

        });
    }

    private _getTablesByLiga(): Observable<ServerResponse<Team[]>> {
        return this._ligaService.getTables(this.liga.id).pipe(map((data: ServerResponse<Team[]>) => {
            this.tables = data.results;
            return data;
        }));
    }

    private _getTours(): Observable<ServerResponse<Tour[]>> {
        return this._ligaService.getTour(this.liga.id).pipe(map((data: ServerResponse<Tour[]>) => {
            this.tours = data.results;
            return data;
        }));
    }

    private _combineObservable() {
        this._loadingService.showLoading();
        const combine = forkJoin([
            this._getTablesByLiga(),
            this._getTours()
        ]);
        this._subscription = combine.pipe(finalize(() => this._loadingService.hideLoading())).subscribe();
    }

    public selectTour(index: number) {
        this.selectedTour = index;
    }

    public onClickTabItem(itemName: string) {
        this.activeTabItem = itemName;
    }

    ngOnDestroy() {
        this._paramsSubscription.unsubscribe();
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
}

