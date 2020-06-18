import { NgModule } from "@angular/core";
import { RatingView } from './rating.view';
import { RatingRoutingModule } from './rating.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [RatingView],
    imports: [RatingRoutingModule, SharedModule]
})
export class RatingModule { }