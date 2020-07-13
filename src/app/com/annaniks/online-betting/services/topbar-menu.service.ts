import { Injectable } from '@angular/core';

@Injectable()
export class TopBarMenuService {

    private mainMenuItems = [
        { label: 'Главная', path: '#' },
        { label: 'Как играть?', path: '/how-top-play' },
        { label: 'Мои турниры', path: '#' },
        { label: 'Рейтинг', path: '/rating' },
        { label: 'Страны', path: '/tournament' },

    ];

    public getMenuItems() {
        return this.mainMenuItems;
    }
}
