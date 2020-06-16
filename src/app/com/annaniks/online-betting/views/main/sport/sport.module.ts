import { NgModule } from "@angular/core";
import { SportView } from './sport.view';
import { SportRoutingModule } from './sport.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [SportView],
    imports: [SportRoutingModule, SharedModule]
})
export class SportModule { }