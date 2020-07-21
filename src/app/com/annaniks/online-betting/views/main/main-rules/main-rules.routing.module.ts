import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MainRulesViewComponent } from './main-rules.view';
let mainRulesRoutes: Routes = [{ path: '', component: MainRulesViewComponent }]
@NgModule({
    imports: [RouterModule.forChild(mainRulesRoutes)],
    exports: [RouterModule]
})
export class MainRulesRoutingModule {

}