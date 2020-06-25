import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingViewComponent } from './rating.view';

const ratingRoutes: Routes = [{ path: '', component: RatingViewComponent }];

@NgModule({
    imports: [RouterModule.forChild(ratingRoutes)]
})
export class RatingRoutingModule { }
