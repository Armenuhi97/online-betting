import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { BaseView } from './base.view';
let baseRoutes: Routes = [{ path: '', component: BaseView }]
@NgModule({
    imports: [RouterModule.forChild(baseRoutes)],
    exports: [RouterModule]
})
export class BaseRoutingModule { }