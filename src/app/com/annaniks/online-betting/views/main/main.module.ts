import { NgModule } from "@angular/core";
import { MainView } from './main.view';
import { SharedModule } from '../../shared/shared.module';
import { MainRoutingModule } from './main.routing.module';
import { TopbarComponent } from '../../components';
import { LoginModal, RegistrationModal } from '../../modals';
import { MainService } from './main.service';
import { LoginService } from '../../services/login.service';

@NgModule({
    declarations: [MainView, TopbarComponent, LoginModal, RegistrationModal],
    entryComponents: [LoginModal, RegistrationModal],
    imports: [SharedModule, MainRoutingModule],
    providers: [MainService, LoginService]
})
export class MainModule { }