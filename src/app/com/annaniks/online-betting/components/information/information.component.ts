import { Component, OnDestroy, OnInit } from "@angular/core";
import { TopBarMenuService } from '../../services';

@Component({
    selector: 'app-information',
    templateUrl: 'information.component.html',
    styleUrls: ['information.component.scss']
})
export class InformationComponent implements OnInit, OnDestroy {
    constructor(private _topbarMenuListService: TopBarMenuService) { }

    ngOnInit() { }

    ngOnDestroy() { }

    get topbarMenuList() {
        return this._topbarMenuListService.getMenuItems();
    }

}