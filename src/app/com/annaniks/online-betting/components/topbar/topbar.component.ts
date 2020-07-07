import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginModalComponent, RegistrationModalComponent } from '../../modals';
import { MatDialog } from '@angular/material/dialog';
import { MenuService } from '../../services/menu.service';
import { LoginService, AppService } from '../../services';
import { CookieService } from 'ngx-cookie-service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

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
        private _appService: AppService,
        private _cookieService: CookieService,
        private _router: Router
    ) { }

    ngOnInit() {
        this.checkIfAuthorized();
    }

    public checkIfAuthorized(): void {
        this.loginService.getAuthState().pipe(takeUntil(this._unsubscribe$)).subscribe((state: boolean) => {
            this.isAuthorized = state;
        });
    }

    public openLoginModal() {
        const dialog = this._matDialog.open(LoginModalComponent, {
            width: '371px',
            maxHeight: '80vh',
        });
        dialog.afterClosed().subscribe(() => { });
    }
    public openOrCloseMenu() {
        let isOpen = this._appService.getIsOpenMenu();
        this._appService.openOrCloseMenu(!isOpen)
    }
    public registrationModal() {
        const dialog = this._matDialog.open(RegistrationModalComponent, {
            width: '371px',
            minHeight: '433px',
            maxHeight: '85vh',
        });
        dialog.afterClosed().subscribe((data) => {
            if (data) {
                this.openLoginModal();
            }
        });
    }

    public logout(): void {
        this._cookieService.deleteAll('/'); if (this._router.url.startsWith('/user') || this._router.url == '/rating') {
            this._router.navigate(['/'])
        }
        setTimeout(() => {
            window.location.reload();
        }, 200);

    }

    get companyMenuList() {
        return this._menuListService.getMainMenuItems();
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
