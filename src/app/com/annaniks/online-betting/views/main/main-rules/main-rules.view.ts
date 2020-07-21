import { Component } from '@angular/core';

@Component({
    selector: 'app-main-rules-view',
    templateUrl: 'main-rules.view.html',
    styleUrls: ['main-rules.view.scss']
})
export class MainRulesViewComponent {
    public rules:string[] = [
        'Зарегистрируйся!',
        'Выбери турнир!',
        'Выбери тур!',
        'Выбери исход в каждой игре!',
        'Сохрани!',
    ]
}