import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICourse } from 'src/models.model';

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
        startDate: '2021-05-30',
        finishDate: '2021-06-30',
      },
      {
        id: 1,
        title: 'kresz',
        startDate: '2021-06-15',
        finishDate: '2021-06-30',
      },
      {
        id: 2,
        title: 'elsősegély',
        startDate: '2021-06-20',
        finishDate: '2021-06-30',
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
      startDate: startDate,
      finishDate: finishDate,
    });
  }
}
