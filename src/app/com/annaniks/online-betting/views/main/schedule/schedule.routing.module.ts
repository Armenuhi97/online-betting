import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ScheduleView } from './schedule.view';
let scheduleRoutes:Routes=[{path:'',component:ScheduleView}]
@NgModule({
    imports:[RouterModule.forRoot(scheduleRoutes)],
    exports:[RouterModule]
})
export class ScheduleRoutingModule{}