import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-betting-card',
    templateUrl: 'betting-card.component.html',
    styleUrls: ['betting-card.component.scss']
})
export class BettingCardComponent {
    public item
    @Input('item')
    set setItme($event){
        this.item=$event
    }
    public setStake(item, type) {
        item.stake = type
    }
 }