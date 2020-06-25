import { NgModule } from '@angular/core';
import { MainViewComponent } from './main.view';
import { SharedModule } from '../../shared/shared.module';
import { MainRoutingModule } from './main.routing.module';
import { TopbarComponent, LeftMenuComponent, FooterComponent } from '../../components';
import { LoginModalComponent, RegistrationModalComponent } from '../../modals';
import { MainService } from './main.service';
import { MenuService } from '../../services/menu.service';
import { LoadingService } from '../../services';
import { LoadingComponent } from '../../loading/loading.component';

@NgModule({
    declarations: [
        MainViewComponent,
        TopbarComponent,
        LoginModalComponent,
        RegistrationModalComponent,
        LeftMenuComponent,
        FooterComponent,
        LoadingComponent
    ],
    entryComponents: [LoginModalComponent, RegistrationModalComponent],
    imports: [SharedModule, MainRoutingModule],
    providers: [MenuService, LoadingService]
})
export class MainModule { }
