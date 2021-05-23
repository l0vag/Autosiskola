import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/core-component/exams/shared/exam.service';
import { IExam } from 'src/models.model';
import { LoaderService } from '../global-loader/shared/loader.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
})
export class ExamsComponent implements OnInit {
  examList: Array<IExam>;

  constructor(
    private examService: ExamService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderService.isShow.next(true);
    this.examService.getExams().subscribe(
      (data) => {
        this.examList = data;
        console.log('EXAMS: ', this.examList);
      },
      (error) => console.log(error),
      () => this.loaderService.isShow.next(false)
    );
  }
}
