import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PersonalAccountView } from './personal-account.view';
let personalAccountsRoutes: Routes = [{
    path: '', component: PersonalAccountView,
    children: [
        { path: '', redirectTo: 'settings', pathMatch: 'full', },
        { path: 'settings', loadChildren: () => import('./user-settigs/user-settigs.module').then(m => m.UserettingsModule) },
        { path: 'history', loadChildren: () => import('./user-history/user-history.module').then(m => m.UserHistoryModule) }
    ]
},
]
@NgModule({
    imports: [RouterModule.forChild(personalAccountsRoutes)],
    exports: [RouterModule]
})
export class PersonalAccountRoutingModule { }