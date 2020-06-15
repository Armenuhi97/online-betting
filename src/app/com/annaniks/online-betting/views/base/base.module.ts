import { NgModule } from "@angular/core";
import { BaseView } from './base.view';
import { BaseRoutingModule } from './base.routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [BaseView],
    imports: [BaseRoutingModule,SharedModule]
})
export class BaseModule { }