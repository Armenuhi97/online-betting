import { NgModule } from "@angular/core";
import { ScheduleView } from './schedule.view';
import { ScheduleRoutingModule } from './schedule.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [ScheduleView],
    imports: [ScheduleRoutingModule, SharedModule]
})
export class ScheduleModule { }