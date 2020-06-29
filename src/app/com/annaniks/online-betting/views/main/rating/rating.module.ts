import { NgModule } from '@angular/core';
import { RatingViewComponent } from './rating.view';
import { RatingRoutingModule } from './rating.routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { RatingService } from './rating.service';

@NgModule({
    declarations: [RatingViewComponent],
    imports: [RatingRoutingModule, SharedModule],
    providers: [RatingService]
})
export class RatingModule { }
