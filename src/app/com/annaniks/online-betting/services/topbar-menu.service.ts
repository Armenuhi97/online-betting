import { Injectable } from '@angular/core';

@Injectable()
export class TopBarMenuService {

    private mainMenuItems = [
        { label: 'Главная', path: '/tournament' },
        { label: 'Как играть?', path: '/how-top-play' },
        { label: 'Мои турниры', path: '/my-tournament' },
        { label: 'Рейтинг', path: '/rating' },
        { label: 'Страны', path: '/tournament' },

    ];

    public getMenuItems() {
        return this.mainMenuItems;
    }
}
