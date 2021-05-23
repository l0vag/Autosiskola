import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/models.model';
import { UserService } from 'src/core-component/users/shared/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  userList: Array<IUser>;
  isFinished = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.userList = data;
        console.log('USERS: ', this.userList);
      },
      (error) => console.log(error),
      () => (this.isFinished = true)
    );
  }
}
