import { NgModule } from "@angular/core";
import { MainView } from './main.view';
import { SharedModule } from '../../shared/shared.module';
import { MainRoutingModule } from './main.routing.module';
import { TopbarComponent, LeftMenuComponent, FooterComponent } from '../../components';
import { LoginModal, RegistrationModal } from '../../modals';
import { MainService } from './main.service';
import { MenuService } from '../../services/menu.service';

@NgModule({
    declarations: [MainView, TopbarComponent, LoginModal, RegistrationModal, LeftMenuComponent,FooterComponent],
    entryComponents: [LoginModal, RegistrationModal],
    imports: [SharedModule, MainRoutingModule],
    providers: [MainService,MenuService ]
})
export class MainModule { }