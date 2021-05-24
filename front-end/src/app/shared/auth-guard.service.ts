import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, OnInit, OnDestroy {
  private readonly unsubscriber$: Subject<void> = new Subject();

  private isAuthenticated: boolean;

  constructor(public auth: AuthService, public router: Router) {}

  async ngOnInit() {
    await this.auth.isAuthenticated
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((isAuth) => (this.isAuthenticated = isAuth));
  }

  async canActivate(): Promise<boolean> {
    if (!this.isAuthenticated) {
      await this.auth.isAuthenticated
        .pipe(takeUntil(this.unsubscriber$))
        .subscribe((isAuth) => (this.isAuthenticated = isAuth));
    }

    if (!this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
