import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSettingsViewComponent } from './user-settigs.view';

const userSettingsRoutes: Routes = [{ path: '', component: UserSettingsViewComponent }];

@NgModule({
    imports: [RouterModule.forChild(userSettingsRoutes)],
    exports: [RouterModule]
})
export class UserSettingsRoutingModule { }

