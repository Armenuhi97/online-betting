import { NgModule } from "@angular/core";
import { ContactsView } from './contacts.view';
import { ContactsRoutingModule } from './contacts.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [ContactsView],
    imports: [ContactsRoutingModule, SharedModule]
})
export class ContactsModule { }