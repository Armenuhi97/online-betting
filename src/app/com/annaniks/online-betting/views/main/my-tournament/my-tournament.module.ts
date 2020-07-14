import { NgModule } from "@angular/core";
import { MyTournamentViewComponent } from './my-tournament.view';
import { MyTournamentRoutingModule } from './my-tournament.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [MyTournamentViewComponent],
    imports: [MyTournamentRoutingModule, SharedModule]
})
export class MyTournamentModule { }