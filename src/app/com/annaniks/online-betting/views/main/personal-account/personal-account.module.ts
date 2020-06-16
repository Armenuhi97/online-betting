import { NgModule } from "@angular/core";
import { PersonalAccountView } from './personal-account.view';
import { PersonalAccountRoutingModule } from './personal-account.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [PersonalAccountView],
    imports: [PersonalAccountRoutingModule, SharedModule]
})
export class PersonalAccountModule { }