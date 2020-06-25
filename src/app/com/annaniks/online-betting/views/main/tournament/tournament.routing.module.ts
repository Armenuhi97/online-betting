import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentViewComponent } from './tournament.view';
const tournamentRoutes: Routes = [{ path: '', component: TournamentViewComponent }];
@NgModule({
    imports: [RouterModule.forChild(tournamentRoutes)],
    exports: [RouterModule]
})
export class TournamentRoutingModule { }
