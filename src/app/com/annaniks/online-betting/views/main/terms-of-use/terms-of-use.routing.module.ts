import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { TermsOfUseView } from './terms-of-use.view';
let termsOfUseRoutes: Routes = [{ path: '', component: TermsOfUseView }]
@NgModule({
    imports: [RouterModule.forChild(termsOfUseRoutes)],
    exports: [RouterModule]
})
export class TermsOfUserRoutingModule { }