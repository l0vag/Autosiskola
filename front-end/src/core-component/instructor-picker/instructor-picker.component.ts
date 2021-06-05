import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from 'src/models.model';
import { UserService } from '../users/shared/user.service';
import { IUserWeek } from './../../models.model';

@Component({
  selector: 'app-instructor-picker',
  templateUrl: './instructor-picker.component.html',
})
export class InstructorPickerComponent implements OnInit {
  @Output() selectUserEvent = new EventEmitter<IUserWeek>();
  public weeks;
  public instructors: Array<IUser>;
  public selectedUser: IUser;
  public selectedWeekNum: number;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.instructors = data.filter((selectedUser) => {
        return selectedUser.role === 'ROLE_INSTRUCTOR';
      });
    });
  }

  selectUser(selectedUser: IUser) {
    this.selectUserEvent.emit({
      selectedUser: this.selectedUser,
      weekNumber: null,
    });
    this.selectedWeekNum = null;
    this.selectedUser = selectedUser;
    this.weeks = this.userService.getUser(this.selectedUser.name).weeks;
  }

  emitSelectedUser(weekNum: number) {
    this.selectedWeekNum = weekNum;
    this.selectUserEvent.emit({
      selectedUser: this.selectedUser,
      weekNumber: weekNum,
    });
  }
}
