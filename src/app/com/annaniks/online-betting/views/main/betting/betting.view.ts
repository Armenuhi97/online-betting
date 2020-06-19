import { Component } from '@angular/core';
import { SportDetailService } from '../../../services/sport-details.service';
import { Country } from '../../../models/country';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';
import { AppService } from '../../../services/app.service';

@Component({
    selector: 'betting-view',
    templateUrl: 'betting.view.html',
    styleUrls: ['betting.view.scss']
})
export class BettingView {
    public tours = []
    public isNext = false
    // public countries: Country[];
    public selectGroup: FormGroup
    private _unsubscribe = new Subject<void>();
    public sportTypes = [{ name: 'Футбол' }, { name: 'Хоккей' }];
    public ligas1 = [{ name: 'Премьер лига' }];
    public ligas = [];
    constructor(private _sportDetailsService: SportDetailService,
        private _mainService: MainService, private _appService: AppService,
        private _activatedRoute: ActivatedRoute, private _fb: FormBuilder, private _router: Router) { }

    ngOnInit() {
        this._validate()
        // this.getAllCountries();
    }

    private _validate() {
        this.selectGroup = this._fb.group({
            country: [null],
            sportType: [null],
            liga: [null]
        })
    }
    // private getAllCountries(): void {
    //     this.countries = this._mainService.getCountry()
    // }
    public find() {
        if (!this.isNext) {
            this.isNext = !this.isNext;
            if (this.selectGroup.get('country').value)
                this.ligas = this._appService.checkPropertyValue(this.selectGroup.get('country').value, 'country_liga')
        } else {
            if (this.selectGroup.get('liga').value)
                this._router.navigate([`/liga/${this.selectGroup.get('liga').value.link}`],)

        }

    }
    public goBack() {
        this.isNext = false;
        this.ligas = []
    }

    ngOnDestroy() {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    }
    get countries(): Country[] {
        // this.countries = this._mainService.getCountry();
        return this._mainService.getCountry()
    }
}