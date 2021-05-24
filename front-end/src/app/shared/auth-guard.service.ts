import { Injectable, OnDestroy } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, OnDestroy {
  private isAuthenticated: boolean;
  private sub: Subscription;

  constructor(public auth: AuthService, public router: Router) {
    this.sub = this.auth.isAuthenticated.subscribe(
      (isAuth) => (this.isAuthenticated = isAuth)
    );
  }

  canActivate(): boolean {
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
