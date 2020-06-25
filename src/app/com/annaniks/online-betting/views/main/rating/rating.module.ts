import { NgModule } from '@angular/core';
import { RatingViewComponent } from './rating.view';
import { RatingRoutingModule } from './rating.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [RatingViewComponent],
    imports: [RatingRoutingModule, SharedModule]
})
export class RatingModule { }
