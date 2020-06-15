import { NgModule } from "@angular/core";
import { TermsOfUseView } from './terms-of-use.view';
import { TermsOfUserRoutingModule } from './terms-of-use.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [TermsOfUseView],
    imports: [TermsOfUserRoutingModule, SharedModule]
})
export class TermsOfUseModule { }