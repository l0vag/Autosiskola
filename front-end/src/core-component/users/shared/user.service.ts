import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/models.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CoursesService } from 'src/core-component/courses/shared/courses.service';
import { users } from './../../../data.mock';
import { WeekCreatorService } from 'src/helpers/week-creator.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: IUser[];

  constructor(
    private http: HttpClient,
    private coursesService: CoursesService,
    private weekCreator: WeekCreatorService
  ) {
    this.users = users;
    let generatedWeek = this.weekCreator.generateCalendar();
    this.users.forEach((user) => Object.assign(user.weeks, generatedWeek));
    console.log('calendar: ', this.weekCreator.generateCalendar());
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
      weeks: [],
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

  occupieClass(
    instructor: IUser,
    student: IUser,
    weekNum: number,
    dayNum: number,
    classNum: number
  ) {
    let ins = this.getUser(instructor.name);
    let workWeek = ins.weeks.find((week) => {
      return week.number === weekNum;
    });
    let workDay = workWeek?.workDays[dayNum];
    let driverClass = workDay.classes.find((driverClass) => {
      return driverClass.id === classNum;
    });

    console.log(ins, workWeek, workDay, driverClass, student);

    driverClass.isFree = false;
    driverClass.student = student?.name;
    console.log('users: ', this.users);
  }
}
