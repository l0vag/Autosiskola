import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ExamService } from 'src/core-component/exams/shared/exam.service';
import { IExam } from 'src/models.model';
import { LoaderService } from '../global-loader/shared/loader.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
})
export class ExamsComponent implements OnInit, OnDestroy {
  private readonly unsubscriber$: Subject<void> = new Subject();
  examList: Array<IExam>;

  constructor(
    private examService: ExamService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderService.isShow.next(true);
    this.examService
      .getExams()
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe(
        (data) => {
          this.examList = data;
        },
        (error) => console.log(error),
        () => this.loaderService.isShow.next(false)
      );
  }

  deleteExam(id: number) {
    this.examService.deleteExam(id);

    this.examService
      .getExams()
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe(
        (data) => {
          this.examList = data;
        },
        (error) => console.log(error),
        () => this.loaderService.isShow.next(false)
      );
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
