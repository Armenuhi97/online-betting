import { Component, OnInit, OnDestroy } from "@angular/core";
import { LoginModal, RegistrationModal } from '../../modals';
import { MatDialog } from '@angular/material/dialog';
import { MenuService } from '../../services/menu.service';

@Component({
    selector: 'app-topbar',
    templateUrl: 'topbar.component.html',
    styleUrls: ['topbar.component.scss']
})
export class TopbarComponent implements OnInit, OnDestroy {
    public isAuthorizated: boolean = false;
    
    constructor(private _matDialog: MatDialog, private _menuListService: MenuService) { }

    ngOnInit() { }

    public openLoginModal() {
        let dialog = this._matDialog.open(LoginModal, {
            width: '371px',
            minHeight: '433px',
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
    ngOnDestroy() { }
    get companyMenuList() {
        return this._menuListService.getMainMenuItems()
    }
}