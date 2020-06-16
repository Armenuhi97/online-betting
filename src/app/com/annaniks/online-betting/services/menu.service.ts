import { Injectable } from "@angular/core";

@Injectable()
export class MenuService {
    private mainMenuItems = [
        { label: 'О нас', path: '/about' },
        { label: 'Пользовательские соглашение', path: '/terms-of-use' },
        { label: 'Контакты', path: '/contacts' }
    ]
    public getMainMenuItems() {
        return this.mainMenuItems
    }
}