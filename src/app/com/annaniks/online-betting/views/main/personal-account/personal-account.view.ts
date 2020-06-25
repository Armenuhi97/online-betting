import { Component } from '@angular/core';

@Component({
    selector: 'app-personal-account-view',
    templateUrl: 'personal-account.view.html',
    styleUrls: ['personal-account.view.scss']
})
export class PersonalAccountViewComponent {
    public personalAreaMenu = [
        { label: 'Настройки пользователя', path: '/user/settings' },
        { label: 'История прогнозов', path: '/user/history' },
    ];
}
