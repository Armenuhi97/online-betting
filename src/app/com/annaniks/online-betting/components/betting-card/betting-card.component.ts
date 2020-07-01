import { Component, Input, OnInit, forwardRef, OnDestroy } from '@angular/core';
import { Match } from '../../models/model';
import { NG_VALUE_ACCESSOR, FormControl, ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppService } from '../../services';
import * as moment from 'moment';

@Component({
    selector: 'app-betting-card',
    templateUrl: 'betting-card.component.html',
    styleUrls: ['betting-card.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BettingCardComponent),
            multi: true
        }
    ]
})
export class BettingCardComponent implements OnInit, OnDestroy, ControlValueAccessor {

    @Input() item;

    private unsubscribe$ = new Subject<void>();
    public matchControl = new FormControl(null);
    public matchData: Match = null;

    constructor(private _appService: AppService) { }

    ngOnInit() {
        this._handleNameControlChanges();
    }

    private _handleNameControlChanges(): void {
        this.matchControl.valueChanges
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((value: string) => {
                const newMatchState = Object.assign({}, this.matchData, {
                    matchStatus: value
                });
                this.onChange(newMatchState);
            });
    }

    public writeValue(value: Match): void {
        this.matchData = value;
        this.matchControl.setValue(value.matchStatus);
    }

    public registerOnChange(fn: (data: Match) => {}) {
        this.onChange = fn;
    }

    public registerOnTouched(fn: (data: Match) => {}) {
        this.onTouch = fn;
    }

    public onChange = (value: Match) => { };

    public onTouch = (value: Match) => { };
    public checkIsWin(status: string): boolean {
        return (this.matchData.match_client_bet &&
            this.matchData.match_client_bet.length &&
            this.matchData.game_output === status &&
            this.matchData.match_client_bet[0].game_output == status)
    }
    public showWinner(status: string) {
        return ((this.matchData.game_output === status && ((!this.matchData.match_client_bet || (this.matchData.match_client_bet && !this.matchData.match_client_bet.length))
            || (this.matchData.match_client_bet && this.matchData.match_client_bet.length
                && this.matchData.match_client_bet[0].game_output !== status)))
        )
    }
    public checkIsDefeat(status: string): boolean {
        return (this.matchData.game_output !== status &&
            this.matchData.match_client_bet && this.matchData.match_client_bet.length && this.matchData.game_output &&
            this.matchData.match_client_bet[0].game_output == status)
    }
    public convertDate(date: string): string {
        const timeZone = moment.tz.guess();
        return this._appService.convertDate(timeZone, date);
    }
    public checkIsStartMatch(): boolean {
        const matchDateByUtc = new Date(this.matchData.date + ' UTC');
        const currentDate = new Date();
        return (matchDateByUtc < currentDate)
    }
    get statusCtrlValue(): string {
        return this.matchControl.value;
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
