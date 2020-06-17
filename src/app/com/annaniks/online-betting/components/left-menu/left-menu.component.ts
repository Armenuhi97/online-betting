import { Component, OnInit, OnDestroy } from "@angular/core";
import { SportDetailService } from '../../services/sport-details.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Country } from '../../models/country';

@Component({
    selector: 'app-left-menu',
    templateUrl: 'left-menu.component.html',
    styleUrls: ['left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit, OnDestroy {

    public countries: Country[];

    private _unsubscribe = new Subject<void>();

    constructor(private _sportDetailsService: SportDetailService) { }

    ngOnInit() {
        this.getAllCountries();
    }

    private getAllCountries(): void {
        this._sportDetailsService.getAllLigues()
            .pipe(takeUntil(this._unsubscribe))
            .subscribe(response => {
                this.countries = response
                console.log(response);
            })
    }

    ngOnDestroy() {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    }
}
