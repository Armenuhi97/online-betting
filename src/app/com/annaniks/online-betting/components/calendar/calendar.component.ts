import { Component, Input, OnInit, OnDestroy } from '@angular/core';
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
    @Input('tours')
    set setTours($event: Tour[]) {
        this.tours = $event;
        if (this.tours && this.tours.length) {
            this.isShow = true;
            this._getMatches(this.tours[0].id);
            this.selectedTour = 0;
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
    ) { }

    ngOnInit() {
        this._initForm();
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
                console.log(response);
            });
    }

    private _formatBeforeRequest(): SendBetsModel[] {
        const formattedData: SendBetsModel[] = [];
        const me = JSON.parse(localStorage.getItem('bet-user'));
        for (const element of this.controls) {
            console.log(element);
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

    public selectTour(tour, index: number) {
        this.selectedTour = index;
        this._getMatches(tour.id);
    }



    get controls(): AbstractControl[] {
        return this.matchesForm.controls;
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }


}
