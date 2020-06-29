import { Component, OnInit, OnDestroy } from '@angular/core';
import { RatingService } from './rating.service';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { Rating, RatingResponse } from '../../../models/model';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../../../services';

@Component({
    selector: 'app-rating',
    templateUrl: 'rating.view.html',
    styleUrls: ['rating.view.scss']
})
export class RatingViewComponent implements OnInit, OnDestroy {
    private _unsubscribe$ = new Subject<void>();
    public ratingList: Rating[] = [];
    public fileUrl = environment.MEDIA_URL;
    constructor(private _ratingService: RatingService, private _loadingService: LoadingService) { }
    ngOnInit() {
        this._getOrdering();
    }
    private _getOrdering() {
        this._loadingService.showLoading();
        this._ratingService.getOrdering().pipe(takeUntil(this._unsubscribe$), finalize(() => { this._loadingService.hideLoading(); })).subscribe((data: RatingResponse<Rating[]>) => {
            this.ratingList = data.count;
        })
    }
    public getImage(participant: Rating): string {
        let image: string;
        if (participant && participant.client__image) {
            image = this.fileUrl + participant.client__image;
        } else {
            image = 'assets/img/default-user-image.png';
        }
        return image
    }
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
