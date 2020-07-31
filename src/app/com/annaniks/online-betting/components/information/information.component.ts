import { Component, OnDestroy, OnInit } from "@angular/core";
import { TopBarMenuService, LoginService } from '../../services';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-information',
    templateUrl: 'information.component.html',
    styleUrls: ['information.component.scss']
})
export class InformationComponent implements OnInit, OnDestroy {
    public isAuthorized: boolean = false;
    private _unsubscribe$ = new Subject<void>();

    constructor(private _topbarMenuListService: TopBarMenuService,
        private loginService: LoginService) { }

    ngOnInit() {
        this.checkIfAuthorized();
    }

    public checkIfAuthorized(): void {
        this.loginService.getAuthState().pipe(takeUntil(this._unsubscribe$)).subscribe((state: boolean) => {
            this.isAuthorized = state;
        });
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }

    get topbarMenuList() {
        return this._topbarMenuListService.getMenuItems();
    }

}