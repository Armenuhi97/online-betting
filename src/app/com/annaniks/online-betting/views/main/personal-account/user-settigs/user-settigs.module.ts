import { NgModule } from "@angular/core";
import { UserSettingsView } from './user-settigs.view';
import { UserSettingsRoutingModule } from './user-settigs.routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { UserSettingsService } from './user-settings.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
    declarations: [UserSettingsView],
    imports: [UserSettingsRoutingModule, SharedModule, MatAutocompleteModule, MatFormFieldModule],
    providers: [UserSettingsService]
})
export class UserettingsModule { }