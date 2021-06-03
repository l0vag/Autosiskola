import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/auth.service';
import { ExamService } from 'src/core-component/exams/shared/exam.service';
import { IExam, IUser } from 'src/models.model';
import { LoaderService } from '../global-loader/shared/loader.service';
import { CreateNewExamComponent } from './create-new-exam/create-new-exam.component';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
})
export class ExamsComponent implements OnInit, OnDestroy {
  private readonly unsubscriber$: Subject<void> = new Subject();
  examList: Array<IExam>;
  user: IUser;

  constructor(
    private examService: ExamService,
    private loaderService: LoaderService,
    private dialog: MatDialog,
    private auth: AuthService
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
    this.auth.user
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((user) => (this.user = user));
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: 'Új kurzus felvétele',
    };

    const dialogRef = this.dialog.open(CreateNewExamComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      console.log('Dialog output:', data);
      if (data) {
        this.examService.addExam(data.title, data.examDate, data.examTime);
      }
    });
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

  addUser(id: number, student: IUser) {
    console.log(id, student);
    this.examService.addUser(id, student);
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
