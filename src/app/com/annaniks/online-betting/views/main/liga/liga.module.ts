import { NgModule } from "@angular/core";
import { Ligaview } from './liga.view';
import { LigaRoutingModule } from './liga.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [Ligaview],
    imports: [LigaRoutingModule, SharedModule]
})
export class LigaModule { }