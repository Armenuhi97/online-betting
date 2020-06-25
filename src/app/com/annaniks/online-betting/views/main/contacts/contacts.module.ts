import { NgModule } from '@angular/core';
import { ContactsViewComponent } from './contacts.view';
import { ContactsRoutingModule } from './contacts.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [ContactsViewComponent],
    imports: [ContactsRoutingModule, SharedModule]
})
export class ContactsModule { }
