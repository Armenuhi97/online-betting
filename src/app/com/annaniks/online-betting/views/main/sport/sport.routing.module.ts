import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { SportView } from './sport.view';
let sportRoutes: Routes = [{ path: '', component: SportView }]
@NgModule({
    imports: [RouterModule.forChild(sportRoutes)],
    exports: [RouterModule]
})
export class SportRoutingModule { }