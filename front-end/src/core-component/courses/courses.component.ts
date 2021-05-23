import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/models.model';
import { CoursesService } from './shared/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit {
  courses: ICourse[];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService
      .getCourses()
      .subscribe((courses) => (this.courses = courses));
  }
}
