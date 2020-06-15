import { NgModule } from "@angular/core";
import { AboutUsView } from './about-us.view';
import { AboutUsRoutingModule } from './about-us.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [AboutUsView],
    imports: [AboutUsRoutingModule, SharedModule]
})
export class AboutUsModule { }