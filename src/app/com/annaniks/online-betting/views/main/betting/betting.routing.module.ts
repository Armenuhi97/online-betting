import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BettingViewComponent } from './betting.view';
const bettingRoutes: Routes = [{ path: '', component: BettingViewComponent }];
@NgModule({
    imports: [RouterModule.forChild(bettingRoutes)],
    exports: [RouterModule]
})
export class BettingRoutingModule { }

