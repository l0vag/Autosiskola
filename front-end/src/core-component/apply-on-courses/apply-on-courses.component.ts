import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-on-courses',
  templateUrl: './apply-on-courses.component.html',
  styleUrls: ['./apply-on-courses.component.scss'],
})
export class ApplyOnCoursesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  selected(e) {
    console.log('event: ', e);
  }
}
