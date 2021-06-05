import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/models.model';
import { UserService } from 'src/core-component/users/shared/user.service';
import { LoaderService } from '../shared/global-loader/shared/loader.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  private readonly unsubscriber$: Subject<void> = new Subject();
  userList: Array<IUser>;
  modUser: IUser;

  constructor(
    private userService: UserService,
    private loaderService: LoaderService,
    private dialog: MatDialog
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

  createDialog(userId: number) {
    let user = this.userService.getById(userId);
    console.log('USER: ', user);
    if (user) {
      this.modUser = user;
      this.openDialog();
    }
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: this.modUser.name + ' adatainak módosítása',
      user: this.modUser,
    };

    const dialogRef = this.dialog.open(EditUserComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((data) => {
        console.log('Dialog output:', data);
        let user = this.userService.getById(data.id);
        if (user) {
          user.name = data.formData.name;
          user.role = data.formData.role;
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
