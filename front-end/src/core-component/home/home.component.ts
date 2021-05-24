import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { IUser } from 'src/models.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  public authUser: IUser;
  private sub: Subscription;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.auth.user.subscribe(this.onAuth);
  }

  private onAuth = (user) => {
    this.authUser = user;
  };

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  showProfile() {
    this.router.navigateByUrl('profile');
  }
}
