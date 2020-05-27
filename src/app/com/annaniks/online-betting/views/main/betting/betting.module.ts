import { NgModule } from "@angular/core";
import { BettingView } from './betting.view';
import { BettingRoutingModule } from './betting.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [BettingView],
    imports: [BettingRoutingModule, SharedModule]
})
export class BettingModule { }