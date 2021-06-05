import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../../users/shared/user.service';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
})
export class TimePickerComponent implements OnInit {
  @Input() workWeek;
  @Output() classSelectedEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  apply(dayNum: number, classNum: number) {
    this.classSelectedEvent.emit({ dayNum, classNum });
  }
}
