import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DateHelperService } from 'src/helpers/date-helper.service';
import { IExam, IUser } from 'src/models.model';
import { exams } from './../../../data.mock';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  exams: Array<IExam>;
  constructor(private http: HttpClient, private dateHelper: DateHelperService) {
    this.exams = exams;
  }

  getExams(): Observable<Array<IExam>> {
    return of(this.exams);
    //return this.http.get<IExam[]>(environment.apiUrl + '/exams/available');
  }

  getExamById(id: number): IExam {
    return this.exams.find((exam) => exam.id === id);
  }

  addExam(title: string, examDate: string, examTime) {
    this.exams.push({
      id: this.exams.length,
      title: title,
      examDate: this.dateHelper.dateCreator(examDate, examTime),
      results: [],
      users: [],
      maxNum: 10,
    });
  }

  modifyExam(examId: number, examData: any) {
    let exam = this.getExamById(examId);
    let newExam: IExam = {
      id: examId,
      title: examData.title,
      examDate: this.dateHelper.dateCreator(
        examData.examDate,
        examData.examTime
      ),
      results: exam.results,
      users: exam.users,
      maxNum: examData.maxNum,
    };

    Object.assign(exam, newExam);
  }

  deleteExam(id: number) {
    this.exams = this.exams.filter((u) => u.id !== id);
  }

  addUser(id: number, student: IUser) {
    let exam = this.exams.filter((u) => u.id === id)[0];
    if (
      0 >
        exam.users.findIndex((user) => {
          return user === student;
        }) &&
      exam.users.length <= exam.maxNum
    ) {
      exam.users.push(student);
    }
  }
}
