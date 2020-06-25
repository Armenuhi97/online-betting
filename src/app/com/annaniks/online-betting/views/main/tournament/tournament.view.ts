import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-tournament-view',
    templateUrl: 'tournament.view.html',
    styleUrls: ['tournament.view.scss']
})
export class TournamentViewComponent implements OnDestroy, OnInit {
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
    ];
    public selectedTour = 0;
    constructor(private _activatedRoute: ActivatedRoute) { }

    ngOnInit() { }

    public selectTour(tour, index: number) {
        this.selectedTour = index;
    }

    ngOnDestroy() { }
}
