import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IExam } from 'src/models.model';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  constructor(private http: HttpClient) {}

  getExams(): Observable<Array<IExam>> {
    return this.http.get<IExam[]>(environment.apiUrl + '/exams/available');
  }
}
