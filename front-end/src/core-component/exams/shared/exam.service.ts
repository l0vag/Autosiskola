import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DateHelperService } from 'src/helpers/date-helper.service';
import { IExam, IUser } from 'src/models.model';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  exams: Array<IExam>;
  constructor(private http: HttpClient, private dateHelper: DateHelperService) {
    this.exams = [
      {
        id: 0,
        title: 'forgalmi',
        examDate: new Date('2021-10-11 14:00'),
        results: [],
        users: [],
      },
      {
        id: 1,
        title: 'forgalmi',
        examDate: new Date('2021-12-11 10:00'),
        results: [],
        users: [],
      },
      {
        id: 2,
        title: 'kresz',
        examDate: new Date('2021-06-13 14:00'),
        results: [],
        users: [],
      },
    ];
  }

  getExams(): Observable<Array<IExam>> {
    return of(this.exams);
    //return this.http.get<IExam[]>(environment.apiUrl + '/exams/available');
  }

  addExam(title: string, examDate: string, examTime) {
    this.exams.push({
      id: this.exams.length,
      title: title,
      examDate: this.dateHelper.dateCreator(examDate, examTime),
      results: [],
      users: [],
    });
  }

  deleteExam(id: number) {
    this.exams = this.exams.filter((u) => u.id !== id);
  }

  addUser(id: number, student: IUser) {
    let exam = this.exams.filter((u) => u.id === id)[0];

    exam.users.push(student);
  }
}
