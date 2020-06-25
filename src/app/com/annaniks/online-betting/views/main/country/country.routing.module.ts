import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryViewComponent } from './country.view';
const countryRoutes: Routes = [{ path: '', component: CountryViewComponent }];
@NgModule({
    imports: [RouterModule.forChild(countryRoutes)],
    exports: [RouterModule]
})
export class CountryRoutingModule { }
