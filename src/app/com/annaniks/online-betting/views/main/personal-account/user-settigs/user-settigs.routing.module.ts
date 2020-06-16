import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { UserSettingsView } from './user-settigs.view';
let userSettingsRoutes: Routes = [{ path: '', component: UserSettingsView }]
@NgModule({
    imports: [RouterModule.forChild(userSettingsRoutes)],
    exports: [RouterModule]
})
export class UserSettingsRoutingModule { }