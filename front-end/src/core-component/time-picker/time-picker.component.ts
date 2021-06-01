import { Component, OnInit } from '@angular/core';

interface driveClass {
  isFree: boolean;
  student: string;
}

interface workday {
  name: string;
  classes: driveClass[];
}

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
})
export class TimePickerComponent implements OnInit {
  dateTable: Array<workday>;

  constructor() {}

  ngOnInit(): void {}
}
