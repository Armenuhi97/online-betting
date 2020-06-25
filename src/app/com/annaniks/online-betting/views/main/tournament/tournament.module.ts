import { NgModule } from '@angular/core';
import { TournamentViewComponent } from './tournament.view';
import { TournamentRoutingModule } from './tournament.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [TournamentViewComponent],
    imports: [TournamentRoutingModule, SharedModule]
})
export class TournamentModule { }
