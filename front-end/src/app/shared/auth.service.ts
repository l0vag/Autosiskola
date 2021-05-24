import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { UserService } from 'src/core-component/users/shared/user.service';
import { IUser } from 'src/models.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated: Subject<boolean> = new Subject();
  private _user: ReplaySubject<IUser> = new ReplaySubject(1);

  public readonly isAuthenticated = this._isAuthenticated.asObservable();
  public readonly user = this._user.asObservable();

  constructor(private userService: UserService) {}

  authenticate(name: string, password: string) {
    let user = this.userService.getUser(name);
    this._user.next(user);

    if (user) {
      this._isAuthenticated.next(user.password === password);
    } else {
      this._isAuthenticated.next(false);
    }
  }

  login(name: string, password: string): IUser {
    let user = this.userService.getUser(name);
    this._user.next(user);

    if (user) {
      this._isAuthenticated.next(user.password === password);
    } else {
      this._isAuthenticated.next(false);
    }
    return user;
  }

  logout() {
    this._isAuthenticated.next(false);
    this._user = null;
  }
}
