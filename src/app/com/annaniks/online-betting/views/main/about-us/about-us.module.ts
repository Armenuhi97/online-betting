import { NgModule } from '@angular/core';
import { AboutUsViewComponent } from './about-us.view';
import { AboutUsRoutingModule } from './about-us.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [AboutUsViewComponent],
    imports: [AboutUsRoutingModule, SharedModule]
})
export class AboutUsModule { }
