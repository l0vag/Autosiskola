import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from 'src/core-component/users/shared/user.service';
import { IUser } from 'src/models.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _isAuthenticated: Subject<boolean> = new Subject();
  user: IUser = null;

  public readonly isAuthenticated = this._isAuthenticated.asObservable();

  constructor(private userService: UserService) {}

  authenticate(name: string, password: string) {
    this.user = this.userService.getUser(name);

    if (this.user) {
      this._isAuthenticated.next(this.user.password === password);
    } else {
      this._isAuthenticated.next(false);
    }
  }

  login(name: string, password: string): IUser {
    this.user = this.userService.getUser(name);

    if (this.user) {
      this._isAuthenticated.next(this.user.password === password);
    }

    return this.user;
  }

  logout() {
    this._isAuthenticated.next(false);
    this.user = null;
  }
}
