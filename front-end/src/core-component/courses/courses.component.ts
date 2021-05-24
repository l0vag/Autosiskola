import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ICourse } from 'src/models.model';
import { CreateNewDialogComponent } from './new-course/create-new-dialog.component';
import { CoursesService } from './shared/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit {
  courses: ICourse[];

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.coursesService
      .getCourses()
      .subscribe((courses) => (this.courses = courses));
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: 'Új kurzus felvétele',
    };

    const dialogRef = this.dialog.open(CreateNewDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      console.log('Dialog output:', data);
      if (data) {
        this.coursesService.addCourse(
          data.title,
          data.startDate,
          data.finishDate
        );
      }
    });
  }
}
