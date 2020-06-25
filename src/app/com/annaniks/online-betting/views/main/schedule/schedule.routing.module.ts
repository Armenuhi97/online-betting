import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleViewComponent } from './schedule.view';
const scheduleRoutes: Routes = [{ path: '', component: ScheduleViewComponent }];
@NgModule({
    imports: [RouterModule.forRoot(scheduleRoutes)],
    exports: [RouterModule]
})
export class ScheduleRoutingModule { }
