import { NgModule } from "@angular/core";
import { MainView } from './main.view';
import { SharedModule } from '../../shared/shared.module';
import { MainRoutingModule } from './main.routing.module';
import { TopbarComponent, LeftMenuComponent, FooterComponent } from '../../components';
import { LoginModal, RegistrationModal } from '../../modals';
import { MainService } from './main.service';
import { MenuService } from '../../services/menu.service';
import { LoadingService } from '../../services';
import { LoadingComponent } from '../../loading/loading.component';

@NgModule({
    declarations: [
        MainView,
        TopbarComponent,
        LoginModal,
        RegistrationModal,
        LeftMenuComponent,
        FooterComponent,
        LoadingComponent
    ],
    entryComponents: [LoginModal, RegistrationModal],
    imports: [SharedModule, MainRoutingModule],
    providers: [MenuService, LoadingService]
})
export class MainModule { }