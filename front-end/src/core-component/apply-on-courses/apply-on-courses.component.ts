import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { UserService } from '../users/shared/user.service';
import { IUser, IUserWeek } from './../../models.model';

@Component({
  selector: 'app-apply-on-courses',
  templateUrl: './apply-on-courses.component.html',
})
export class ApplyOnCoursesComponent implements OnInit {
  public workWeek;
  private selectedInstructor;
  private authUser: IUser;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    this.authService.user.subscribe((user) => {
      this.authUser = user;
    });
  }

  ngOnInit(): void {}

  weekSelected(e: IUserWeek) {
    this.selectedInstructor = e.selectedUser;
    this.workWeek = e.selectedUser?.weeks?.find((week) => {
      return week.number === e.weekNumber;
    });
  }

  onClassSelected(event) {
    this.userService.occupieClass(
      this.selectedInstructor,
      this.authUser,
      this.workWeek.number,
      event.dayNum,
      event.classNum
    );
  }
}
