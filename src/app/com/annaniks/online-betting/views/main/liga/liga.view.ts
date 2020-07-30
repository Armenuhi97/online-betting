import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Subject, forkJoin, Observable, of } from 'rxjs';
import { MainService } from '../main.service';
import { AppService } from '../../../services/app.service';
import { Liga } from '../../../models/country';
import { LigaService } from './liga.service';
import { map, finalize, switchMap, takeUntil } from 'rxjs/operators';
import { ServerResponse, Team, Tour, Count } from '../../../models/model';
import { LoadingService, LoginService } from '../../../services';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-liga-view',
    templateUrl: 'liga.view.html',
    styleUrls: ['liga.view.scss']
})
export class LigaViewComponent implements OnInit, OnDestroy {
    private _unsubscribe$ = new Subject<void>();
    public ligaCount: number;
    public tourCount: number;
    public userPlace: number
    public selectedTour: Tour;
    public tours: Tour[] = [];
    private _paramsSubscription: Subscription;
    public liga: Liga;
    public activeTabItem: string = 'calendar';
    public tables: Team[] = [];
    private _subscription: Subscription;
    public isAuthorized: boolean = false;
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _ligaService: LigaService,
        private _loadingService: LoadingService,
        private _mainService: MainService,
        private _appService: AppService,
        private _title: Title,
        private _loginService: LoginService
    ) { }

    ngOnInit() {
        this.isAuthorized = this._loginService.getAuthStateSync();
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
            return data
        }));
    }

    private _getTours() {
        return this._ligaService.getTour(this.liga.id).pipe(
            switchMap((data: ServerResponse<Tour[]>) => {
                this.tours = data.results;
                return this._activatedRoute.queryParams.pipe(
                    finalize(() => { this._loadingService.hideLoading() }),
                    switchMap((params) => {
                        if (this.tours && this.tours.length) {
                            if (params && params.tour) {
                                this.selectedTour = this._appService.checkPropertyValue(this._appService.filterArray(this.tours, 'id', +params.tour), 0);
                                return this._getCountInTour(this._appService.checkPropertyValue(this.selectedTour, 'id'))
                            } else {
                                return of()
                                // this.selectedTour = this.tours[0];
                                // return this._getCountInTour(this._appService.checkPropertyValue(this.selectedTour, 'id'))
                            }
                        } else {
                            this.selectedTour = null;
                            this._loadingService.hideLoading();
                            return of()
                        }
                    })
                )
            },
            ));
    }

    private _getCountInTour(id: number) {
        if (this.isAuthorized && id) {
            return this._ligaService.getTourCount(id).pipe(
                map((data: Count) => {
                    this.tourCount = data.count;
                }))
        } else {
            this.selectedTour = null;
            this.tourCount = 0;
            return of()
        }
    }
    private _combineObservable() {
        this._loadingService.showLoading();
        const combine = forkJoin([
            this._getTablesByLiga(),
            this._getTours(),
            this._getLigaCount(),
            this._getUserPlace()
        ]);
        this._subscription = combine.pipe(finalize(() => this._loadingService.hideLoading())).subscribe();
    }

    private _getLigaCount() {
        this.ligaCount = 0;
        if (this.isAuthorized) {
            return this._ligaService.getLigaCount(this.liga.id).pipe(
                map((data: Count) => {
                    this.ligaCount = data.count;
                    return data
                })
            )
        } else {
            return of(false)
        }
    }
    private _getUserPlace() {
        if (this.isAuthorized) {

            return this._ligaService.getUserPlace(this.liga.id).pipe(
                map((data: Count) => {
                    this.userPlace = data.count;
                    return data
                })
            )
        } else {
            return of(false);
        }
    }
    public onClickTabItem(itemName: string): void {
        this.activeTabItem = itemName;
    }
    public lastFinishTour($event) {
        if ($event) {
            this.selectedTour = $event;
            this._getCountInTour(this._appService.checkPropertyValue($event, 'id')).pipe(takeUntil(this._unsubscribe$)).subscribe()
        } else {
            this.selectedTour = null
        }
    }
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
        this._paramsSubscription.unsubscribe();
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
}

