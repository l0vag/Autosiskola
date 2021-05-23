import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { LoaderService } from '../global-loader/shared/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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
    private authService: AuthService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.profileForm.valid) {
      this.loaderService.isShow.next(true);
      console.log(this.profileForm);
      let user = this.authService.login(
        this.profileForm.get('userName').value,
        this.profileForm.get('password').value
      );
      this.loaderService.isShow.next(false);
      this.success = user !== undefined;
      this.error = !this.success;
    } else {
      this.profileForm.markAllAsTouched();
    }
  }
}
