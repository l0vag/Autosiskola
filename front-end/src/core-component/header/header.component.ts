import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isOpen: boolean;
  isAuthenticated: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService
  ) {
    this.auth._isAuthenticated.subscribe(
      (isAuth) => (this.isAuthenticated = isAuth)
    );
  }

  ngOnInit(): void {}

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
