import { Component, OnInit, OnDestroy } from "@angular/core";
import { LoginModal, RegistrationModal } from '../../modals';
import { MatDialog } from '@angular/material/dialog';
import { MenuService } from '../../services/menu.service';
import { LoginService } from '../../services';
import { CookieService } from 'ngx-cookie-service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-topbar',
    templateUrl: 'topbar.component.html',
    styleUrls: ['topbar.component.scss']
})
export class TopbarComponent implements OnInit, OnDestroy {
    private _unsubscribe$ = new Subject<void>();
    public isAuthorized = false;
    constructor(
        private _matDialog: MatDialog,
        private _menuListService: MenuService,
        public loginService: LoginService,
        private _cookieService: CookieService
    ) { }

    ngOnInit() {
        this.checkIfAuthorized();
    }

    public checkIfAuthorized(): void {
        this.loginService.getAuthState().pipe(takeUntil(this._unsubscribe$)).subscribe((state: boolean) => {
            this.isAuthorized = state
        })
    }

    public openLoginModal() {
        let dialog = this._matDialog.open(LoginModal, {
            width: '371px',
            // minHeight: '433px',
            maxHeight: '80vh',
        })
        dialog.afterClosed().subscribe((data) => { })
    }

    public registrationModal() {
        let dialog = this._matDialog.open(RegistrationModal, {
            width: '371px',
            minHeight: '433px',
            maxHeight: '85vh',
        })
        dialog.afterClosed().subscribe((data) => {
            if (data) {
                this.openLoginModal()
            }
        })
    }

    public logout(): void {
        this._cookieService.deleteAll();
        console.log("DELETEd");

        this.loginService.authorizedEvent$.next(false);
        window.location.reload();
    }

    get companyMenuList() {
        return this._menuListService.getMainMenuItems()
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}