import { Component, OnInit, OnDestroy } from '@angular/core';
import { SportDetailService } from '../../../services/sport-details.service';
import { Country, Liga } from '../../../models/country';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';
import { AppService } from '../../../services/app.service';

@Component({
    selector: 'app-betting-view',
    templateUrl: 'betting.view.html',
    styleUrls: ['betting.view.scss']
})
export class BettingViewComponent implements OnInit, OnDestroy {
    public tours = [];
    public isNext = false;
    public selectGroup: FormGroup;
    private _unsubscribe = new Subject<void>();
    public sportTypes = [{ name: 'Футбол' }];
    public ligas: Liga[] = [];

    constructor(
        private _mainService: MainService,
        private _appService: AppService,
        private _fb: FormBuilder,
        private _router: Router
    ) { }

    ngOnInit() {
        this._validate();
    }

    private _validate() {
        this.selectGroup = this._fb.group({
            country: [null],
            sportType: [null],
            liga: [null]
        });
    }

    public find() {
        if (!this.isNext) {
            this.isNext = !this.isNext;
            if (this.selectGroup.get('country').value) {
                this.ligas = this._appService.checkPropertyValue(this.selectGroup.get('country').value, 'country_liga');
            }
        } else {
            if (this.selectGroup.get('liga').value) {
                this._router.navigate([`/liga/${this.selectGroup.get('liga').value.link}`]);
            }

        }

    }
    public goBack() {
        this.isNext = false;
        this.ligas = [];
    }

    get countries(): Country[] {
        return this._mainService.getCountry();
    }

    ngOnDestroy() {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    }

}
