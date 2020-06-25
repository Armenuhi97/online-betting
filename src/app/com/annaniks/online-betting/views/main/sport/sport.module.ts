import { NgModule } from '@angular/core';
import { SportViewComponent } from './sport.view';
import { SportRoutingModule } from './sport.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [SportViewComponent],
    imports: [SportRoutingModule, SharedModule]
})
export class SportModule { }
