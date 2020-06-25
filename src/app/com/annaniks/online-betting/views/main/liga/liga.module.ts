import { NgModule } from '@angular/core';
import { LigaViewComponent } from './liga.view';
import { LigaRoutingModule } from './liga.routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { LigaService } from './liga.service';
import { TableComponent, CalendarComponent } from '../../../components';

@NgModule({
    declarations: [LigaViewComponent, TableComponent, CalendarComponent],
    imports: [LigaRoutingModule, SharedModule],
    providers: [LigaService]
})
export class LigaModule { }
