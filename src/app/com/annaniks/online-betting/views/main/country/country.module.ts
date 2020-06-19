import { NgModule } from "@angular/core";
import { CountryView } from './country.view';
import { CountryRoutingModule } from './country.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [CountryView],
    imports: [CountryRoutingModule, SharedModule]
})
export class CountryModule { }