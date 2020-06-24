import { NgModule } from "@angular/core";
import { UserSettingsView } from './user-settigs.view';
import { UserSettingsRoutingModule } from './user-settigs.routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { UserSettingsService } from './user-settings.service';

@NgModule({
    declarations: [UserSettingsView],
    imports: [UserSettingsRoutingModule, SharedModule],
    providers:[UserSettingsService]
})
export class UserettingsModule { }