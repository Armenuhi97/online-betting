import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from './com/annaniks/online-betting/services';
import { takeUntil, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MainService } from './com/annaniks/online-betting/views/main/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private _unsubscribe$ = new Subject<void>();
  public title = 'СпортКлик';

  constructor(private router: Router, private _loginService: LoginService, private _mainService: MainService) { }

  ngOnInit() {
    this._invokeAuthStateAndFetchMe();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  private _invokeAuthStateAndFetchMe(): void {
    this._loginService.checkAuthState()
      .pipe(
        takeUntil(this._unsubscribe$),
        switchMap(() => {
          return this._mainService.getMe();
        })
      ).subscribe();
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
