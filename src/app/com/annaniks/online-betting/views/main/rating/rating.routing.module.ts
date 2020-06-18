import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { RatingView } from './rating.view';
let ratingRoutes:Routes=[{path:'',component:RatingView}]
@NgModule({
imports:[RouterModule.forChild(ratingRoutes)]
})
export class RatingRoutingModule{}