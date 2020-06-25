import { NgModule } from '@angular/core';
import { UserHistoryViewComponent } from './user-history.view';
import { UserHistoryRoutingModule } from './user-history.routing.module';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
    declarations: [UserHistoryViewComponent],
    imports: [UserHistoryRoutingModule, SharedModule]
})
export class UserHistoryModule { }
