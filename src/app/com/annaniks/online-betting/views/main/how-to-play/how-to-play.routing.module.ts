import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HowToPlayViewComponent } from './how-to-play.view';
let howToPlayRoutes: Routes = [{ path: '', component: HowToPlayViewComponent }]
@NgModule({
    imports: [RouterModule.forChild(howToPlayRoutes)],
    exports: [RouterModule]
})
export class HowToPlayRoutingModule { }
