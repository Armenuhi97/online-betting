import { Component, OnInit, OnDestroy } from "@angular/core";
import { MyTournamentService } from '../../../services/my-tournament.service';
import { finalize, takeUntil } from 'rxjs/operators';
import { LoadingService, AppService } from '../../../services';
import { Subject } from 'rxjs';
import { Liga } from '../../../models/country';

@Component({
    selector: 'app-my-tournament-view',
    templateUrl: 'my-tournament.view.html',
    styleUrls: ['my-tournament.view.scss']
})
export class MyTournamentViewComponent implements OnInit, OnDestroy {
    private _unsubscribe$ = new Subject<void>();
    public ligas: Liga[] = []
    constructor(
        private _loadingService: LoadingService,
        private _appService: AppService,
        private _myTournamentService: MyTournamentService) { }

    ngOnInit() {
        this._getMyTournament()
    }

    private _getMyTournament(): void {
        this._loadingService.showLoading();
        let userId: number = this._appService.checkPropertyValue(JSON.parse(localStorage.getItem('bet-user')), 'id');
        if (userId) {
            this._myTournamentService.getMyTournament(userId)
                .pipe(
                    finalize(() => (this._loadingService.hideLoading())),
                    takeUntil(this._unsubscribe$),
                ).subscribe((data: { turs: Liga[] }) => {
                    this.ligas = data.turs;
                })
        }
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}