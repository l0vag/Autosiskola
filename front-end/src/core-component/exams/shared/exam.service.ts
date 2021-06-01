import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IExam } from 'src/models.model';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  exams = [];
  constructor(private http: HttpClient) {
    this.exams = [
      {
        id: 1,
        title: 'forgalmi',
        examDate: new Date('2021-10-11 14:00'),
        results: [],
      },
      {
        id: 2,
        title: 'forgalmi',
        examDate: new Date('2021-12-11 10:00'),
        results: [],
      },
      {
        id: 5,
        title: 'kresz',
        examDate: new Date('2021-06-13 14:00'),
        results: [],
      },
    ];
  }

  getExams(): Observable<Array<IExam>> {
    return of(this.exams);
    //return this.http.get<IExam[]>(environment.apiUrl + '/exams/available');
  }

  addExam(title: string, examDate: string) {
    this.exams.push({
      id: this.exams.length,
      title: title,
      examDate: new Date(examDate),
    });
  }

  deleteExam(id: number) {
    this.exams = this.exams.filter((u) => u.id !== id);
  }
}
