import { Injectable } from '@angular/core';

@Injectable()
export class TopBarMenuService {

    private mainMenuItems = [
        { label: 'Главная', path: '/main', isAuth: false },
        { label: 'Как играть?', path: '/how-top-play', isAuth: false },
        { label: 'Мои турниры', path: '/my-tournament', isAuth: true },
        { label: 'Рейтинг', path: '/rating', isAuth: true },
        // { label: 'Страны', path: '/tournament' },

    ];

    public getMenuItems() {
        return this.mainMenuItems;
    }
}
