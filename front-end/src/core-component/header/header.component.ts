import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  private readonly unsubscriber$: Subject<void> = new Subject();
  isOpen: boolean;
  isAuthenticated: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService
  ) {
    this.auth.isAuthenticated
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((isAuth) => (this.isAuthenticated = isAuth));
  }

  ngOnInit(): void {}

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
