import { NgModule } from "@angular/core";
import { Ligaview } from './liga.view';
import { LigaRoutingModule } from './liga.routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { LigaService } from './liga.service';
import { TableComponent, CalendarComponent } from '../../../components';

@NgModule({
    declarations: [Ligaview,TableComponent,CalendarComponent],
    imports: [LigaRoutingModule, SharedModule],
    providers:[LigaService]
})
export class LigaModule { }