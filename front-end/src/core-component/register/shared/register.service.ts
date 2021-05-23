import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/core-component/users/shared/user.service';
import { IUser } from 'src/models.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient, private userService: UserService) {}

  register(body): Observable<any> {
    return of(this.userService.add(body.name, body.password));
    // return this.http.post(environment.apiUrl + '/users/register', body);
  }
}
