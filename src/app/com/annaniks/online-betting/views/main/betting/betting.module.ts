import { NgModule } from '@angular/core';
import { BettingViewComponent } from './betting.view';
import { BettingRoutingModule } from './betting.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [BettingViewComponent],
    imports: [BettingRoutingModule, SharedModule]
})
export class BettingModule { }
