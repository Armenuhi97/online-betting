import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportViewComponent } from './sport.view';

const sportRoutes: Routes = [{ path: '', component: SportViewComponent }];

@NgModule({
    imports: [RouterModule.forChild(sportRoutes)],
    exports: [RouterModule]
})
export class SportRoutingModule { }
