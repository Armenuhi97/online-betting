import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CountryView } from './country.view';
let countryRoutes: Routes = [{ path: '', component: CountryView }]
@NgModule({
    imports: [RouterModule.forChild(countryRoutes)],
    exports: [RouterModule]
})
export class CountryRoutingModule { }