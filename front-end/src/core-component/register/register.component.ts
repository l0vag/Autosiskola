import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoaderService } from '../global-loader/shared/loader.service';
import { RegisterService } from './shared/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
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
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.profileForm.valid) {
      this.loaderService.isShow.next(true);
      console.log(this.profileForm);
      this.registerService
        .register({
          name: this.profileForm.get('userName').value,
          password: this.profileForm.get('password').value,
        })
        .subscribe(
          (data) => console.log('post answer: ', data),
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
