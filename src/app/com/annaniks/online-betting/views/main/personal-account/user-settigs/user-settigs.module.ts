import { NgModule } from "@angular/core";
import { UserSettingsView } from './user-settigs.view';
import { UserSettingsRoutingModule } from './user-settigs.routing.module';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
    declarations: [UserSettingsView],
    imports: [UserSettingsRoutingModule, SharedModule]
})
export class UserettingsModule { }