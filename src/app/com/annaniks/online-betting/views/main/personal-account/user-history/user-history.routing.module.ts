import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHistoryViewComponent } from './user-history.view';

const userHistoryRoutes: Routes = [{ path: '', component: UserHistoryViewComponent }];

@NgModule({
    imports: [RouterModule.forChild(userHistoryRoutes)],
    exports: [RouterModule]
})
export class UserHistoryRoutingModule { }
