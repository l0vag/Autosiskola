import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { LoaderService } from '../global-loader/shared/loader.service';
import { RegisterService } from './shared/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  success = false;
  error = false;

  get userName() {
    return this.profileForm.get('userName');
  }
  get password() {
    return this.profileForm.get('password');
  }

  profileForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private registerService: RegisterService,
    private loaderService: LoaderService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  submit() {
    let name = this.profileForm.get('userName').value;
    let pwd = this.profileForm.get('password').value;
    if (this.profileForm.valid) {
      this.loaderService.isShow.next(true);
      this.registerService
        .register({
          name: name,
          password: pwd,
        })
        .subscribe(
          (data) => {
            console.log('post answer: ', data);
            this.authService.login(name, pwd);
          },
          (error) => {
            console.log('ERROR: ', error);
            this.loaderService.isShow.next(false);
            this.error = true;
          },
          () => {
            this.loaderService.isShow.next(false);
            this.success = true;
          }
        );
    } else {
      this.profileForm.markAllAsTouched();
    }
  }
}
