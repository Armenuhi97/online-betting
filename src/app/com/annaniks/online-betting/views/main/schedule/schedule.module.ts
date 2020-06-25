import { NgModule } from '@angular/core';
import { ScheduleViewComponent } from './schedule.view';
import { ScheduleRoutingModule } from './schedule.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [ScheduleViewComponent],
    imports: [ScheduleRoutingModule, SharedModule]
})
export class ScheduleModule { }
