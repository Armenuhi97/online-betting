import { Component, HostListener, OnInit, OnDestroy } from "@angular/core";
import { AppService } from '../../services';

@Component({
    selector: 'app-slide-nav',
    templateUrl: 'slide-nav.component.html',
    styleUrls: ['slide-nav.component.scss']
})
export class SlideNavComponent implements OnInit, OnDestroy {
    public activeTab: string = 'tournament';
    @HostListener('window:resize', ['$event'])
    private _checkWindowSize(): void {
        if (window.innerWidth > 920) {
            if (this._appService.getIsOpenMenu()) {
                this._appService.closeMenu();
            }
        } else {
            this._appService.closeMenu();
        }
    }
    constructor(private _appService: AppService) { }

    public setActiveTab(key: string) {
        this.activeTab = key;
    }

    ngOnInit() {
        this._checkWindowSize();
    }

    ngOnDestroy() { }

    get isOpenMenu(): boolean {
        return this._appService.getIsOpenMenu();
    }

}