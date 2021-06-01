import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICourse, IUser } from 'src/models.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: ICourse[];

  constructor() {
    this.courses = [
      {
        id: 0,
        title: 'kresz',
        startDate: new Date('2021-05-30'),
        finishDate: new Date('2021-06-30'),
        users: [],
      },
      {
        id: 1,
        title: 'kresz',
        startDate: new Date('2021-06-15'),
        finishDate: new Date('2021-06-30'),
        users: [],
      },
      {
        id: 2,
        title: 'elsősegély',
        startDate: new Date('2021-06-20'),
        finishDate: new Date('2021-06-30'),
        users: [],
      },
    ];
  }

  getCourses(): Observable<ICourse[]> {
    return of(this.courses);
  }

  getById(id: number): ICourse {
    return this.courses.find((course) => course.id === id);
  }

  addCourse(title: string, startDate: string, finishDate: string) {
    this.courses.push({
      id: this.courses.length,
      title: title,
      startDate: new Date(startDate),
      finishDate: new Date(finishDate),
      users: [],
    });
    console.log(this.courses);
  }

  deleteCourse(id: number) {
    this.courses = this.courses.filter((u) => u.id !== id);
  }

  addUser(id: number, user: IUser) {
    let course = this.getById(id);
    if (course) {
      course.users.push(user);
    }
  }
}
