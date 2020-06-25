import { NgModule } from '@angular/core';
import { PersonalAccountViewComponent } from './personal-account.view';
import { PersonalAccountRoutingModule } from './personal-account.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [PersonalAccountViewComponent],
    imports: [PersonalAccountRoutingModule, SharedModule]
})
export class PersonalAccountModule { }
