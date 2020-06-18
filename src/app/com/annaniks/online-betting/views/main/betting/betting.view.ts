import { Component } from '@angular/core';
import { SportDetailService } from '../../../services/sport-details.service';
import { Country } from '../../../models/country';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'betting-view',
    templateUrl: 'betting.view.html',
    styleUrls: ['betting.view.scss']
})
export class BettingView {
    public tours=[]
    public isNext = false
    public countries: Country[];
    public selectGroup: FormGroup
    private _unsubscribe = new Subject<void>();
    public sportTypes = [{ name: 'Футбол' }, { name: 'Хоккей' }];
    public ligas1 = [{ name: 'Премьер лига' }];
    public ligas = [];
    constructor(private _sportDetailsService: SportDetailService, private _fb: FormBuilder,private _router:Router) { }

    ngOnInit() {
        this._validate()
        this.getAllCountries();
    }

    private _validate() {
        this.selectGroup = this._fb.group({
            country: [null],
            sportType: [null],
            liga: [null]
        })
    }
    private getAllCountries(): void {
        this._sportDetailsService.getAllLigues()
            .pipe(takeUntil(this._unsubscribe))
            .subscribe(response => {
                this.countries = response
            })
    }
    public find() {
        if (!this.isNext) {
            this.isNext = !this.isNext;
            this.ligas = this.ligas1
        }else{
           this._router.navigate(['/choose/tournament'])
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
}