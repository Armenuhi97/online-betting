import { Component, Input } from "@angular/core";
import { Match } from '../../models/model';

@Component({
    selector: 'app-betting-card',
    templateUrl: 'betting-card.component.html',
    styleUrls: ['betting-card.component.scss']
})
export class BettingCardComponent {
    public item:Match
    @Input('item')
    set setItme($event:Match){
        this.item=$event
    }
    public setStake(item, type) {
        item.stake = type
    }
 }