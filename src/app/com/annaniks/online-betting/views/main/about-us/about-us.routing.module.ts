import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsViewComponent } from './about-us.view';

const aboutUsRoutes: Routes = [{ path: '', component: AboutUsViewComponent }];

@NgModule({
    imports: [RouterModule.forChild(aboutUsRoutes)],
    exports: [RouterModule]
})
export class AboutUsRoutingModule { }
