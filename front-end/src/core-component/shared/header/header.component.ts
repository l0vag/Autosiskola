import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/auth.service';
import { RoleType } from 'src/enums.enum';
import { IUser } from 'src/models.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  private readonly unsubscriber$: Subject<void> = new Subject();
  isOpen: boolean;
  isAuthenticated: boolean;
  authUser: IUser;
  roleType = RoleType;

  constructor(private router: Router, private auth: AuthService) {
    this.auth.isAuthenticated
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((isAuth) => (this.isAuthenticated = isAuth));
    this.auth.user
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((user) => (this.authUser = user));
  }

  ngOnInit(): void {}

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/home');
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
