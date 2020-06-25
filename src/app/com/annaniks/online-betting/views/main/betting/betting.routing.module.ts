import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BettingViewComponent } from './betting.view';
const bettingRoutes: Routes = [
    {
        path: '', component: BettingViewComponent
    },
    {
        path: 'tournament',
        loadChildren: () => import('../tournament/tournament.module').then(m => m.TournamentModule)
    }];
@NgModule({
    imports: [RouterModule.forChild(bettingRoutes)],
    exports: [RouterModule]
})
export class BettingRoutingModule { }

