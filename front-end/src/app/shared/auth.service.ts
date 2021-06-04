import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { UserService } from 'src/core-component/users/shared/user.service';
import { IUser } from 'src/models.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated: ReplaySubject<boolean> = new ReplaySubject();
  private _user: ReplaySubject<IUser> = new ReplaySubject(1);

  public readonly isAuthenticated = this._isAuthenticated.asObservable();
  public readonly user = this._user.asObservable();

  constructor(private userService: UserService) {
    // DELETE
    this._isAuthenticated.next(true);
    this._user.next({
      id: 9,
      name: 'admin',
      password: 'admin',
      role: 'ROLE_ADMIN',
      results: [],
      courses: [],
      weeks: [],
    });
    // TO THIS
  }

  authenticate(name: string, password: string) {
    let user = this.userService.getUser(name);
    let validPassword = user.password === password;
    this._user.next(user);

    this.broadcast(user, validPassword);
  }

  login(name: string, password: string): IUser {
    let user = this.userService.getUser(name);
    let validPassword = user?.password === password;

    this.broadcast(user, validPassword);

    return user;
  }

  logout() {
    this._isAuthenticated.next(false);
    this._user.next(undefined);
  }

  private broadcast(user: IUser, valid: boolean) {
    if (user && valid) {
      this._isAuthenticated.next(valid);
      this._user.next(user);
    } else {
      this._isAuthenticated.next(false);
      this._user.next(undefined);
    }
  }
}
