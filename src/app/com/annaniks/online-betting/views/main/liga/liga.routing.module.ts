import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LigaViewComponent } from './liga.view';

const ligaRoutes: Routes = [{ path: '', component: LigaViewComponent }];

@NgModule({
    imports: [RouterModule.forChild(ligaRoutes)],
    exports: [RouterModule]
})
export class LigaRoutingModule { }
