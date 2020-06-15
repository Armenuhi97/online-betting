import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './com/annaniks/online-betting/interceptors/api.interceptor';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service'
import { LoginService } from './com/annaniks/online-betting/services/login.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
    LoginService,
    CookieService,
    {
      provide: 'BASE_URL',
      useValue: environment.API_URL
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
