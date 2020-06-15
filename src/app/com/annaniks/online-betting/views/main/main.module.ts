import { NgModule } from "@angular/core";
import { MainView } from './main.view';
import { SharedModule } from '../../shared/shared.module';
import { MainRoutingModule } from './main.routing.module';
import { TopbarComponent, LeftMenuComponent } from '../../components';
import { LoginModal, RegistrationModal } from '../../modals';
import { MainService } from './main.service';

@NgModule({
    declarations: [MainView, TopbarComponent, LoginModal, RegistrationModal, LeftMenuComponent],
    entryComponents: [LoginModal, RegistrationModal],
    imports: [SharedModule, MainRoutingModule],
    providers: [MainService]
})
export class MainModule { }