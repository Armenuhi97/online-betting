import { NgModule } from "@angular/core";
import { UserHistoryView } from './user-history.view';
import { UserHistoryRoutingModule } from './user-history.routing.module';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
    declarations: [UserHistoryView],
    imports: [UserHistoryRoutingModule, SharedModule]
})
export class UserHistoryModule { }