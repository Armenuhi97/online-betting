import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsOfUseViewComponent } from './terms-of-use.view';
const termsOfUseRoutes: Routes = [{ path: '', component: TermsOfUseViewComponent }];
@NgModule({
    imports: [RouterModule.forChild(termsOfUseRoutes)],
    exports: [RouterModule]
})
export class TermsOfUserRoutingModule { }
