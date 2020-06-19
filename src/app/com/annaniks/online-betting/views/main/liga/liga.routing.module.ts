import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { Ligaview } from './liga.view';
let ligaRoutes: Routes = [{ path: '', component: Ligaview }]
@NgModule({
    imports: [RouterModule.forChild(ligaRoutes)],
    exports: [RouterModule]
})
export class LigaRoutingModule { }