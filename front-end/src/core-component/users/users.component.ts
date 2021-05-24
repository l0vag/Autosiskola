import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/models.model';
import { UserService } from 'src/core-component/users/shared/user.service';
import { LoaderService } from '../global-loader/shared/loader.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  private readonly unsubscriber$: Subject<void> = new Subject();
  userList: Array<IUser>;

  constructor(
    private userService: UserService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderService.isShow.next(true);
    this.userService
      .getUsers()
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe(
        (data) => {
          this.userList = data;
        },
        (error) => {
          console.log(error);
          this.loaderService.isShow.next(false);
        },
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

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
