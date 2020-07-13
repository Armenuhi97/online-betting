import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Tour, ServerResponse, Match } from '../../models/model';
import { LigaService } from '../../views/main/liga/liga.service';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { LoadingService, LoginService } from '../../services';
import { AbstractControl, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { BetService } from '../../services/bet.service';
import { SendBetsModel } from '../../models/bet';
import { LoginModalComponent } from '../../modals';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnDestroy {
    public isSaved: boolean = false;
    @Input('selectedTour')
    set setSelectedTour($event: Tour) {
        if ($event) {
            this.selectedTour = $event;
            this._getMatchesBySelectedTour(this.selectedTour)
        }
    }
    @Input('tours')
    set setTours($event: Tour[]) {
        this.tours = $event;
        for (const tour of this.tours)
            this._getMatchesByTour(tour)
        if (this.tours && this.tours.length) {
            this.isShow = true;
            if (!this.selectedTour) {
                this._getMatchesBySelectedTour(this.tours[0])
            }
        } else {
            this.isShow = false;
            this.matches = [];
            this._initForm();
        }
    }

    @Output('getSelectedTour') private _onSelectTour: EventEmitter<Tour> = new EventEmitter<Tour>();

    public isShow: boolean = false;
    private _unsubscribe$ = new Subject<void>();
    public tours: Tour[] = [];
    public selectedTour: Tour;
    public matches: Match[] = [];
    public matchesForm: FormArray;

    constructor(
        private _ligaService: LigaService,
        private _loadingService: LoadingService,
        private _fb: FormBuilder,
        private _betService: BetService,
        private _loginService: LoginService,
        private _matDialog: MatDialog,
    ) { }

    ngOnInit() {
        this._initForm();
    }

    private _initForm(): void {
        this.matchesForm = this._fb.array([]);
    }
    private _getMatchesBySelectedTour(tour: Tour) {
        this._getMatches(tour.id);
        this.selectedTour = tour;
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

    private _getMatches(tourId: number): void {
        this._loadingService.showLoading();
        this._ligaService.getMatch(tourId)
            .pipe(
                finalize(() => this._loadingService.hideLoading()),
                takeUntil(this._unsubscribe$),
            )
            .subscribe((data: ServerResponse<Match[]>) => {
                this.matches = data.results;
                this._setFormArrayControls();
            });
    }
    private _getMatchesByTour(tour) {
        this._ligaService.getMatch(tour.id)
            .pipe(
                finalize(() => this._loadingService.hideLoading()),
                takeUntil(this._unsubscribe$),
            )
            .subscribe((data: ServerResponse<Match[]>) => {
                this.checkIsTourFinished(tour, data.results);
            });
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
        this.selectedTour = tour;
        this._onSelectTour.emit(tour)
        this._getMatches(tour.id);
    }

    get controls(): AbstractControl[] {
        return this.matchesForm.controls;
    }
    public checkIsTourFinished(tour:Tour, matches:Match[]) {
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
