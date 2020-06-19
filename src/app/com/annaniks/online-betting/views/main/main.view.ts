import { Component } from "@angular/core";
import { MainService } from './main.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoadingService } from '../../services';

@Component({
    selector: 'main-view',
    templateUrl: 'main.view.html',
    styleUrls: ['main.view.scss']
})
export class MainView {
    public isGet = false
    private _unsubscribe = new Subject<void>();
    constructor(private _mainService: MainService,
        private _loadingService: LoadingService) { }
    ngOnInit() {
        this._loadingService.showLoading()
        this._mainService.getAllCountries().pipe(takeUntil(this._unsubscribe)).subscribe(() => {
            this.isGet = true;
            this._loadingService.hideLoading()
        })
    }
    ngOnDestroy() {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    }
}