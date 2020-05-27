import { Routes, RouterModule } from '@angular/router';
import { MainView } from './main.view';
import { NgModule } from '@angular/core';

const mainRoutes: Routes = [
    {
        path: '', component: MainView,
        children: [
            { path: '', loadChildren: () => import('./betting/betting.module').then(m => m.BettingModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule { }
