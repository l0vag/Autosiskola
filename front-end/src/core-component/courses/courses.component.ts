import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/auth.service';
import { CourseType } from 'src/enums.enum';
import { ICourse, IUser } from 'src/models.model';
import { CreateNewDialogComponent } from './new-course/create-new-dialog.component';
import { CoursesService } from './shared/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit, OnDestroy {
  private readonly unsubscriber$: Subject<void> = new Subject();
  courses: ICourse[];
  sub: Subscription;
  user: IUser;

  courseType = CourseType;

  constructor(
    private coursesService: CoursesService,
    private auth: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.coursesService
      .getCourses()
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((courses) => (this.courses = courses));

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

    const dialogRef = this.dialog.open(CreateNewDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.coursesService.addCourse(
          data.title,
          data.startDate,
          data.finishDate,
          data.maxNum
        );
      }
    });
  }

  modifyDialog(courseId: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    let course = this.coursesService.getById(courseId);

    dialogConfig.data = {
      title: 'Kurzus módosítása',
      course: course,
    };

    const dialogRef = this.dialog.open(CreateNewDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        console.log('mod data: ', data);
        this.coursesService.modifyCourse(course.id, data);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

  deleteCourse(id: number) {
    this.coursesService.deleteCourse(id);

    this.coursesService
      .getCourses()
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((courses) => (this.courses = courses));
  }

  addUserToCourse(id: number) {
    if (this.user) {
      this.coursesService.addUser(id, this.user);
    }
  }
}
