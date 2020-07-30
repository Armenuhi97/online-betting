import { NgModule } from '@angular/core';
import { RatingViewComponent } from './rating.view';
import { RatingRoutingModule } from './rating.routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { RatingService } from './rating.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    declarations: [RatingViewComponent],
    imports: [RatingRoutingModule, SharedModule,MatFormFieldModule,MatSelectModule],
    providers: [RatingService]
})
export class RatingModule { }
