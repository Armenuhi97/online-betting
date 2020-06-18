import { Component } from "@angular/core";

@Component({
    selector: 'tournament-view',
    templateUrl: 'tournament.view.html',
    styleUrls: ['tournament.view.scss']
})
export class TournamentView {
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
    public selectedTour = 0;
    constructor() { }
    ngOnInit() { }
    public selectTour(tour, index: number) {
        this.selectedTour = index
    }
    ngOnDestroy() { }
}