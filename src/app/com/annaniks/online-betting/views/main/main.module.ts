import { NgModule } from '@angular/core';
import { MainViewComponent } from './main.view';
import { SharedModule } from '../../shared/shared.module';
import { MainRoutingModule } from './main.routing.module';
import { TopbarComponent, LeftMenuComponent, FooterComponent, SlideNavComponent, InformationComponent } from '../../components';
import { LoginModalComponent, RegistrationModalComponent } from '../../modals';
import { MenuService } from '../../services/menu.service';
import { LoadingService, TopBarMenuService } from '../../services';
import { LoadingComponent } from '../../loading/loading.component';

@NgModule({
    declarations: [
        MainViewComponent,
        TopbarComponent,
        LoginModalComponent,
        RegistrationModalComponent,
        LeftMenuComponent,
        FooterComponent,
        LoadingComponent,
        SlideNavComponent,
        InformationComponent
    ],
    entryComponents: [LoginModalComponent, RegistrationModalComponent],
    imports: [SharedModule, MainRoutingModule],
    providers: [MenuService, LoadingService,TopBarMenuService]
})
export class MainModule { }
