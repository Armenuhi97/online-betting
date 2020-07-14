import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MyTournamentViewComponent } from './my-tournament.view';
let myTournamentRoutes: Routes = [{ path: '', component: MyTournamentViewComponent }]
@NgModule({
    imports: [RouterModule.forChild(myTournamentRoutes)],
    exports: [RouterModule]
})
export class MyTournamentRoutingModule { }