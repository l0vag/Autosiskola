import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICourse, IUser } from 'src/models.model';
import { courses } from './../../../data.mock';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: ICourse[];

  constructor() {
    this.courses = courses;
  }

  getCourses(): Observable<ICourse[]> {
    return of(this.courses);
  }

  getById(id: number): ICourse {
    return this.courses.find((course) => course.id === id);
  }

  addCourse(title: string, startDate: string, finishDate: string, maxNum) {
    this.courses.push({
      id: this.courses.length,
      title: title,
      startDate: new Date(startDate),
      finishDate: new Date(finishDate),
      users: [],
      maxNum: maxNum,
    });
    console.log(this.courses);
  }

  deleteCourse(id: number) {
    this.courses = this.courses.filter((u) => u.id !== id);
  }

  addUser(id: number, user: IUser) {
    let course = this.getById(id);
    if (
      0 >
        course.users.findIndex((u) => {
          return u === user;
        }) &&
      course.users.length < course.maxNum
    ) {
      course.users.push(user);
    }
  }
}
