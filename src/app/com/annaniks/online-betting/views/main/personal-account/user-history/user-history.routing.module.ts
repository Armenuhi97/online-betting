import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { UserHistoryView } from './user-history.view';
let userHistoryRoutes: Routes = [{ path: '', component: UserHistoryView }]
@NgModule({
    imports: [RouterModule.forChild(userHistoryRoutes)],
    exports: [RouterModule]
})
export class UserHistoryRoutingModule { }