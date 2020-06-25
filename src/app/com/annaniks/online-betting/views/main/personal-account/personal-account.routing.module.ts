import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalAccountViewComponent } from './personal-account.view';
const personalAccountsRoutes: Routes = [{
    path: '', component: PersonalAccountViewComponent,
    children: [
        { path: '', redirectTo: 'settings', pathMatch: 'full', },
        { path: 'settings', loadChildren: () => import('./user-settigs/user-settigs.module').then(m => m.UserettingsModule) },
        { path: 'history', loadChildren: () => import('./user-history/user-history.module').then(m => m.UserHistoryModule) }
    ]
}
];
@NgModule({
    imports: [RouterModule.forChild(personalAccountsRoutes)],
    exports: [RouterModule]
})
export class PersonalAccountRoutingModule { }
