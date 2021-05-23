import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/models.model';
import { UserService } from 'src/core-component/users/shared/user.service';
import { LoaderService } from '../global-loader/shared/loader.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  userList: Array<IUser>;

  constructor(
    private userService: UserService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderService.isShow.next(true);
    this.userService.getUsers().subscribe(
      (data) => {
        this.userList = data;
        console.log('USERS: ', this.userList);
      },
      (error) => console.log(error),
      () => this.loaderService.isShow.next(false)
    );
  }

  deleteUser(id: number) {
    this.userService.deleteById(id);

    this.userService.getUsers().subscribe((data) => {
      this.userList = data;
    });
  }

  makeStudent(id: number) {
    this.userService.makeStudent(id);

    this.userService.getUsers().subscribe((data) => {
      this.userList = data;
    });
  }
}
