import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from './main.service';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { LoadingService } from '../../services';

@Component({
    selector: 'app-main-view',
    templateUrl: 'main.view.html',
    styleUrls: ['main.view.scss']
})
export class MainViewComponent implements OnInit, OnDestroy {
    public isGet = false;
    private _unsubscribe = new Subject<void>();

    constructor(
        private _mainService: MainService,
        private _loadingService: LoadingService
    ) { }

    ngOnInit() {
        this._loadingService.showLoading();
        this._mainService.getAllCountries().pipe(
            takeUntil(this._unsubscribe),
            finalize(() => this._loadingService.hideLoading()))
            .subscribe(() => {
                this.isGet = true;
            });
    }
    ngOnDestroy() {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    }
}
