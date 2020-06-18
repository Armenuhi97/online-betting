import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { BettingView } from './betting.view';
let bettingRoutes: Routes = [{ path: '', component: BettingView },
{ path: 'tournament', loadChildren: () => import('../tournament/tournament.module').then(m => m.TournamentModule) }]
@NgModule({
    imports: [RouterModule.forChild(bettingRoutes)],
    exports: [RouterModule]
})
export class BettingRoutingModule { }