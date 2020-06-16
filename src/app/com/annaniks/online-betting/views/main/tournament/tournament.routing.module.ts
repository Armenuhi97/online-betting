import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { TournamentView } from './tournament.view';
let tournamentRoutes:Routes=[{path:'',component:TournamentView}]
@NgModule({
    imports:[RouterModule.forChild(tournamentRoutes)],
    exports:[RouterModule]
})
export class TournamentRoutingModule{}