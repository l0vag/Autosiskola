import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/models.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CoursesService } from 'src/core-component/courses/shared/courses.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: IUser[];

  constructor(
    private http: HttpClient,
    private coursesService: CoursesService
  ) {
    this.users = [
      {
        id: 1,
        name: 'Pisti',
        password: 'százhét',
        role: 'ROLE_INSTRUCTOR',
        results: [],
        courses: [],
      },
      {
        id: 2,
        name: 'Béla',
        password: 'százhat',
        role: 'ROLE_INSTRUCTOR',
        results: [],
        courses: [],
      },
      {
        id: 3,
        name: 'Dalma',
        password: 'százhárom',
        role: 'ROLE_ADMIN',
        results: [],
        courses: [],
      },
      {
        id: 4,
        name: 'Géza',
        password: 'tréning',
        role: 'ROLE_STUDENT',
        results: [],
        courses: [],
      },
      {
        id: 5,
        name: 'Géza2',
        password: 'tréning2',
        role: 'ROLE_STUDENT',
        results: [],
        courses: [],
      },
      {
        id: 6,
        name: 'Géza3',
        password: 'tréning3',
        role: 'ROLE_STUDENT',
        results: [],
        courses: [],
      },
      {
        id: 7,
        name: 'Géza4',
        password: 'tréning4',
        role: 'ROLE_GUEST',
        results: [],
        courses: [],
      },
      {
        id: 8,
        name: 'Géza5',
        password: 'tréning5',
        role: 'ROLE_GUEST',
        results: [],
        courses: [],
      },
    ];
  }

  getUsers(): Observable<Array<IUser>> {
    return of(this.users);
    // return this.http.get<IUser[]>(environment.apiUrl + '/users');
  }

  getUser(name: string): IUser {
    return this.users.find((user) => user.name === name);
  }

  getById(id: number): IUser {
    return this.users.find((user) => user.id === id);
  }

  add(name: string, password: string) {
    let user: IUser = {
      id: this.users.length,
      name: name,
      password: password,
      role: 'ROLE_GUEST',
      results: [],
      courses: [],
    };
    this.users.push(user);
  }

  deleteById(id: number) {
    this.users = this.users.filter((u) => u.id !== id);
  }

  makeStudent(id: number) {
    this.users.forEach((user) => {
      if (user.id === id) {
        user.role = 'ROLE_STUDENT';
      }
    });
  }

  addCourse(userId: number, courseId: number) {
    let course = this.coursesService.getById(courseId);

    if (course) {
      this.getById(userId).courses.push(course);
    }
  }
}
