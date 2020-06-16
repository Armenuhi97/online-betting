import { NgModule } from "@angular/core";
import { TournamentView } from './tournament.view';
import { TournamentRoutingModule } from './tournament.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [TournamentView],
    imports: [TournamentRoutingModule, SharedModule]
})
export class TournamentModule { }