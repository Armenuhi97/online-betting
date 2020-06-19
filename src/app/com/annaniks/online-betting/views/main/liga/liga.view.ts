import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MainService } from '../main.service';
import { AppService } from '../../../services/app.service';
import { Liga } from '../../../models/country';

@Component({
    selector: 'liga-view',
    templateUrl: 'liga.view.html',
    styleUrls: ['liga.view.scss']
})
export class Ligaview {
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
    private _paramsSubscription: Subscription;
    public liga: Liga;
    constructor(private _activatedRoute: ActivatedRoute, private _mainService: MainService, private _appService: AppService) { }
    ngOnInit() {
        this._checkProductId()
    }
    private _checkProductId(): void {
        this._paramsSubscription = this._activatedRoute.params.subscribe((params) => {
            if (params && params.countryId) {
                let countries = this._mainService.getCountry()
                let seletedCountry = this._appService.filterArray(countries, 'link', `/${params.sportTipe}/${params.countryId}/`);
                if (params.ligaName)
                    if (seletedCountry && seletedCountry[0] && seletedCountry[0].country_liga) {
                        this.liga = this._appService.checkPropertyValue(this._appService.filterArray(seletedCountry[0].country_liga, 'link', `/${params.sportTipe}/${params.countryId}/${params.ligaName}/`), 0)
                    }
            }

        })
    }
    public selectTour(tour, index: number) {
        this.selectedTour = index
    }
    ngOnDestroy() {
        this._paramsSubscription.unsubscribe()
    }
}