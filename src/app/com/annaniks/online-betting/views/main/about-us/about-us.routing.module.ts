import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AboutUsView } from './about-us.view';
let aboutUsRoutes: Routes = [{ path: '', component: AboutUsView }]
@NgModule({
    imports: [RouterModule.forChild(aboutUsRoutes)],
    exports: [RouterModule]
})
export class AboutUsRoutingModule {

}