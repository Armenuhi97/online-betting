import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsViewComponent } from './contacts.view';

const contactsRoutes: Routes = [{ path: '', component: ContactsViewComponent }];

@NgModule({
    imports: [RouterModule.forChild(contactsRoutes)],
    exports: [RouterModule]
})
export class ContactsRoutingModule { }
