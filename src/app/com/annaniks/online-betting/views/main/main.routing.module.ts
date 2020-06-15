import { Routes, RouterModule } from '@angular/router';
import { MainView } from './main.view';
import { NgModule } from '@angular/core';

const mainRoutes: Routes = [
    {
        path: '', component: MainView,
        children: [
            { path: '', loadChildren: () => import('./betting/betting.module').then(m => m.BettingModule) },
            { path: 'about', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) },
            { path: 'terms-of-use', loadChildren: () => import('./terms-of-use/terms-of-use.module').then(m => m.TermsOfUseModule) },
            { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule { }
