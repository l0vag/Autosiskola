import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/core-component/exams/shared/exam.service';
import { IExam } from 'src/models.model';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
})
export class ExamsComponent implements OnInit {
  examList: Array<IExam>;
  isFinished = false;

  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.examService.getExams().subscribe(
      (data) => {
        this.examList = data;
        console.log('EXAMS: ', this.examList);
      },
      (error) => console.log(error),
      () => (this.isFinished = true)
    );
  }
}
