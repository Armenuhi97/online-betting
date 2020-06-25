import { NgModule } from '@angular/core';
import { CountryViewComponent } from './country.view';
import { CountryRoutingModule } from './country.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [CountryViewComponent],
    imports: [CountryRoutingModule, SharedModule]
})
export class CountryModule { }
