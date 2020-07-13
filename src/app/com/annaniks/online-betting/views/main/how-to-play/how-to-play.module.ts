import { NgModule } from "@angular/core";
import { HowToPlayViewComponent } from './how-to-play.view';
import { HowToPlayRoutingModule } from './how-to-play.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [HowToPlayViewComponent],
    imports: [HowToPlayRoutingModule, SharedModule]
})
export class HowToPlayModule { }