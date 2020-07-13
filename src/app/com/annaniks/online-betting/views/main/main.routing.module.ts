import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main.view';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../../guards/auth.guard';

const mainRoutes: Routes = [
    {
        path: '', component: MainViewComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'tournament' },
            { path: 'about', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) },
            { path: 'terms-of-use', loadChildren: () => import('./terms-of-use/terms-of-use.module').then(m => m.TermsOfUseModule) },
            { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
            {
                path: 'user',
                canActivate: [AuthGuard],
                loadChildren: () => import('./personal-account/personal-account.module').then(m => m.PersonalAccountModule)
            },
            { path: 'schedule', loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule) },
            { path: 'tournament', loadChildren: () => import('./betting/betting.module').then(m => m.BettingModule) },
            { path: 'sport', loadChildren: () => import('./sport/sport.module').then(m => m.SportModule) },
            { path: 'rating',canActivate: [AuthGuard], loadChildren: () => import('./rating/rating.module').then(m => m.RatingModule) },
            { path: 'how-top-play', loadChildren: () => import('./how-to-play/how-to-play.module').then(m => m.HowToPlayModule) },

            { path: 'country/:sportType/:countryId', loadChildren: () => import('./country/country.module').then(m => m.CountryModule) },
            { path: 'liga/:sportType/:countryId/:ligaName', loadChildren: () => import('./liga/liga.module').then(m => m.LigaModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule { }
