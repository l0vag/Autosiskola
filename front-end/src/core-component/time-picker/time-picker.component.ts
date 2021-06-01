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
  public dateTable: Array<workday> = [
    {
      name: 'hétfő',
      classes: [
        {
          isFree: true,
          student: null,
        },
        {
          isFree: true,
          student: null,
        },
        {
          isFree: true,
          student: null,
        },
        {
          isFree: true,
          student: null,
        },
      ],
    },
    {
      name: 'kedd',
      classes: [
        {
          isFree: true,
          student: null,
        },
        {
          isFree: false,
          student: null,
        },
        {
          isFree: true,
          student: null,
        },
        {
          isFree: true,
          student: null,
        },
      ],
    },
    {
      name: 'szerda',
      classes: [
        {
          isFree: false,
          student: null,
        },
        {
          isFree: true,
          student: null,
        },
        {
          isFree: true,
          student: null,
        },
        {
          isFree: true,
          student: null,
        },
      ],
    },
    {
      name: 'csütörtök',
      classes: [
        {
          isFree: true,
          student: null,
        },
        {
          isFree: true,
          student: null,
        },
        {
          isFree: true,
          student: null,
        },
        {
          isFree: false,
          student: null,
        },
      ],
    },
    {
      name: 'péntek',
      classes: [
        {
          isFree: true,
          student: null,
        },
        {
          isFree: true,
          student: null,
        },
        {
          isFree: true,
          student: null,
        },
        {
          isFree: true,
          student: null,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
