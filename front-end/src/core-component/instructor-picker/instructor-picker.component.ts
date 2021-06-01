import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from 'src/models.model';
import { UserService } from '../users/shared/user.service';

@Component({
  selector: 'app-instructor-picker',
  templateUrl: './instructor-picker.component.html',
})
export class InstructorPickerComponent implements OnInit {
  @Output() selectUserEvent = new EventEmitter<IUser>();

  public instructors: Array<IUser>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.instructors = data.filter((user) => {
        return user.role === 'ROLE_INSTRUCTOR';
      });
    });
  }

  emitSelectedUser(user: IUser) {
    console.log('selected user: ', user);
    this.selectUserEvent.emit(user);
  }
}
