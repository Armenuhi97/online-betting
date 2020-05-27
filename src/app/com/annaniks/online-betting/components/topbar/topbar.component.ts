import { Component, OnInit, OnDestroy } from "@angular/core";
import { LoginModal, RegistrationModal } from '../../modals';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-topbar',
    templateUrl: 'topbar.component.html',
    styleUrls: ['topbar.component.scss']
})
export class TopbarComponent implements OnInit, OnDestroy {
    constructor(private _matDialog: MatDialog) { }
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
}