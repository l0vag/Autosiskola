import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IUser } from 'src/models.model';
import { AuthService } from './auth.service';

@Injectable()
export class RoleGuardService implements CanActivate {
  private readonly unsubscriber$: Subject<void> = new Subject();

  private isAuthenticated: boolean;
  private user: IUser;

  constructor(public auth: AuthService, public router: Router) {
    this.auth.isAuthenticated
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((isAuth) => (this.isAuthenticated = isAuth));
    this.auth.user
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((user) => (this.user = user));
  }

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    if (!this.user) {
      await this.auth.user
        .pipe(takeUntil(this.unsubscriber$))
        .subscribe((user) => (this.user = user));
    }

    if (!this.isAuthenticated) {
      await this.auth.isAuthenticated
        .pipe(takeUntil(this.unsubscriber$))
        .subscribe((isAuth) => (this.isAuthenticated = isAuth));
    }

    const expectedRoles = route.data.expectedRoles;

    if (
      !this.isAuthenticated ||
      0 > expectedRoles.findIndex((a) => a === this.user?.role)
    ) {
      this.router.navigateByUrl('/access-denied');
      return false;
    }
    return true;
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
