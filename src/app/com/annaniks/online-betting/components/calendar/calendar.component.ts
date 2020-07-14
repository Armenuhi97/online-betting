import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Tour, ServerResponse, Match } from '../../models/model';
import { LigaService } from '../../views/main/liga/liga.service';
import { Subject, of, Observable } from 'rxjs';
import { takeUntil, finalize, switchMap, map } from 'rxjs/operators';
import { LoadingService, LoginService, AppService } from '../../services';
import { AbstractControl, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { BetService } from '../../services/bet.service';
import { SendBetsModel } from '../../models/bet';
import { LoginModalComponent } from '../../modals';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnDestroy {
    public isSaved: boolean = false;
    @Input('tours')
    set setTours($event: Tour[]) {
        this.tours = $event;
        for (const tour of this.tours)
            this._getMatchesByTour(tour).subscribe()
        if (this.tours && this.tours.length) {
            this.isShow = true;
            this._checkQueryParams();
        } else {
            this.isShow = false;
            this.matches = [];
            this._initForm();
        }
    }

    public isShow: boolean = false;
    private _unsubscribe$ = new Subject<void>();
    public tours: Tour[] = [];
    public selectedTour: number;
    public matches: Match[] = [];
    public matchesForm: FormArray;

    constructor(
        private _ligaService: LigaService,
        private _loadingService: LoadingService,
        private _fb: FormBuilder,
        private _betService: BetService,
        private _loginService: LoginService,
        private _matDialog: MatDialog,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _appService: AppService,
    ) { }

    ngOnInit() {
        this._initForm();
    }
   
    private _checkQueryParams(): void {
        this._activatedRoute.queryParams.pipe(takeUntil(this._unsubscribe$),
            finalize(() => this._loadingService.hideLoading()),
            switchMap((params) => {
                if (this.tours && this.tours.length) {
                    if (params && params.tour) {
                        this.selectedTour = +params.tour;
                        this._loadingService.showLoading();
                        return this._getMatches(this.selectedTour);
                    } else {
                        this.selectedTour = this.tours[0].id;
                        this._loadingService.showLoading();
                        return this._getMatches(this.selectedTour);
                    }
                } else {
                    this._loadingService.hideLoading()
                    return of()
                }
            })).subscribe()
    }

    private _initForm(): void {
        this.matchesForm = this._fb.array([]);
    }

    private _setFormArrayControls(): void {
        const controls: AbstractControl[] = this.matches.map((element) => {
            const isAlreadySelected = element.match_client_bet && element.match_client_bet.length > 0;
            return new FormControl(Object.assign({}, element, {
                matchStatus: isAlreadySelected ? element.match_client_bet[0].game_output : null,
                selectedId: isAlreadySelected ? element.match_client_bet[0].id : null,
            }));
        });
        this.matchesForm.controls = controls;
        for (let match of this.matchesForm.controls) {
            match.valueChanges.pipe(takeUntil(this._unsubscribe$)).subscribe(() => {
                this.isSaved = false;
            })
        }
    }

    private _getMatches(tourId: number) {
        return this._ligaService.getMatch(tourId)
            .pipe(
                finalize(() => (this._loadingService.hideLoading())),
                takeUntil(this._unsubscribe$),
                map((data: ServerResponse<Match[]>) => {
                    this.matches = data.results;
                    this._setFormArrayControls();
                    return data
                }))

    }
    private _getMatchesByTour(tour): Observable<ServerResponse<Match[]>> {
        return this._ligaService.getMatch(tour.id)
            .pipe(
                takeUntil(this._unsubscribe$),
                map((data: ServerResponse<Match[]>) => {
                    this.checkIsTourFinished(tour, data.results);
                    return data
                })
            )

    }

    public openLoginModal() {
        const dialog = this._matDialog.open(LoginModalComponent, {
            width: '371px',
            maxHeight: '80vh',
        });
        return dialog;
    }


    public onSendBets(): void {
        if (!this._loginService.getAuthStateSync()) {
            this.openLoginModal().afterClosed().subscribe((status) => {
                if (status) {
                    this._sendBets();
                }
            });
            return;
        } else {
            this._sendBets()
        }
    }

    private _sendBets(): void {
        this._loadingService.showLoading();
        this._betService.sendBets(this._formatBeforeRequest())
            .pipe(
                takeUntil(this._unsubscribe$),
                finalize(() => this._loadingService.hideLoading())
            )
            .subscribe(response => {
                this.isSaved = true;
            });
    }

    private _formatBeforeRequest(): SendBetsModel[] {
        const formattedData: SendBetsModel[] = [];
        const me = JSON.parse(localStorage.getItem('bet-user'));
        for (const element of this.controls) {
            if (element.value.matchStatus != null) {
                formattedData.push({
                    game_output: element.value.matchStatus,
                    client: me.url,
                    match: element.value.url,
                    id: element.value.selectedId
                });
            }
        }

        return formattedData;
    }

    public selectTour(tour: Tour) {
        this._router.navigate([], { relativeTo: this._activatedRoute, queryParams: { tour: tour.id }, queryParamsHandling: 'merge' })
    }

    get controls(): AbstractControl[] {
        return this.matchesForm.controls;
    }
    public checkIsTourFinished(tour: Tour, matches: Match[]) {
        if (matches && matches.length) {
            const lastMatchDateByUtc = new Date(matches[matches.length - 1].date + ' UTC');
            const currentDate = new Date();
            if (lastMatchDateByUtc < currentDate) {
                tour.status = "finished";
            } else {
                const nextThirdDay = new Date();
                nextThirdDay.setDate(nextThirdDay.getDate() + 3);
                for (const match of matches) {
                    const matchDateByUtc = new Date(match.date + ' UTC');
                    if (matchDateByUtc <= nextThirdDay) {
                        tour.status = 'nearest';
                        return;
                    }
                }
            }
        }
    }
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
