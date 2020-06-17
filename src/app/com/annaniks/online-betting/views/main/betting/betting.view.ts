import { Component } from '@angular/core';

@Component({
    selector: 'betting-view',
    templateUrl: 'betting.view.html',
    styleUrls: ['betting.view.scss']
})
export class BettingView {
    public tourArray = [
        {
            time: '20:00',
            duration: '84',
            stake: null,
            team1: 'Chelsea FC',
            team2: 'Huddersfield Town'
        },
        {
            time: '20:00',
            duration: '84',
            stake: null,
            team1: 'Chelsea FC',
            team2: 'Huddersfield Town'
        },
        {
            time: '20:00',
            duration: '84',
            stake: null,
            team1: 'Chelsea FC',
            team2: 'Huddersfield Town'
        },
        {
            time: '20:00',
            duration: '84',
            stake: null,
            team1: 'Chelsea FC',
            team2: 'Huddersfield Town'
        },
        {
            time: '20:00',
            duration: '84',
            stake: null,
            team1: 'Chelsea FC',
            team2: 'Huddersfield Town'
        },
        {
            time: '20:00',
            duration: '84',
            stake: null,
            team1: 'Chelsea FC',
            team2: 'Huddersfield Town'
        },
        {
            time: '20:00',
            duration: '84',
            stake: null,
            team1: 'Chelsea FC',
            team2: 'Huddersfield Town'
        },
        {
            time: '20:00',
            duration: '84',
            stake: null,
            team1: 'Chelsea FC',
            team2: 'Huddersfield Town'
        },
        {
            time: '20:00',
            duration: '84',
            stake: null,
            team1: 'Chelsea FC',
            team2: 'Huddersfield Town'
        },
        {
            time: '20:00',
            duration: '84',
            stake: null,
            team1: 'Chelsea FC',
            team2: 'Huddersfield Town'
        },
        {
            time: '20:00',
            duration: '84',
            stake: null,
            team1: 'Chelsea FC',
            team2: 'Huddersfield Town'
        }
    ]
    constructor() { }

    ngOnInit() { }

    public setStake(item, type) {
        item.stake = type
    }
    
    ngOnDestroy() { }
}