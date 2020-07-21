import { NgModule } from "@angular/core";
import { MainRulesViewComponent } from './main-rules.view';
import { SharedModule } from '../../../shared/shared.module';
import { MainRulesRoutingModule } from './main-rules.routing.module';

@NgModule({
    declarations: [MainRulesViewComponent],
    imports: [SharedModule, MainRulesRoutingModule]
})
export class MainRuleModule { }