import { Component, Input } from "@angular/core";
import { Tour, ServerResponse, Match } from '../../models/model';
import { LigaService } from '../../views/main/liga/liga.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoadingService } from '../../services';

@Component({
    selector: 'app-calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.scss']
})
export class CalendarComponent {

    private _unsubscribe$ = new Subject<void>()

    public tours: Tour[] = []
    public selectedTour: number
    @Input('tours')
    set setTours($event: Tour[]) {
        this.tours = $event;
        if (this.tours && this.tours.length) {
            this._getMatches(this.tours[0].id);
            this.selectedTour = 0;
        }else{
            this.matches=[]
        }
    }
    public matches: Match[] = []
    constructor(private _ligaService: LigaService, private _loadingService: LoadingService) { }

    private _getMatches(tourId: number):void {
        this._loadingService.showLoading()
        this._ligaService.getMatch(tourId).pipe(takeUntil(this._unsubscribe$)).subscribe((data: ServerResponse<Match[]>) => {
            this.matches = data.results;
            this._loadingService.hideLoading()
        })
    }
    public selectTour(tour, index: number) {
        this.selectedTour = index;
        this._getMatches(tour.id)
    }
    ngOnDestroy() {
        this._unsubscribe$.next()
        this._unsubscribe$.complete()
    }


}