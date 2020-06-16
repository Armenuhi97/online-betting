import { Component } from "@angular/core";
import { MenuService } from '../../services/menu.service';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss']
})
export class FooterComponent {
    constructor(private _menuListService: MenuService) { }
    get companyMenuList() {
        return this._menuListService.getMainMenuItems()
    }
}