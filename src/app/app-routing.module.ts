import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', loadChildren: () => import('./com/annaniks/online-betting/views/main/main.module').then(m => m.MainModule) }];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
