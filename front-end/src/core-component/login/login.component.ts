import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { LoaderService } from '../shared/global-loader/shared/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
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
    private loaderService: LoaderService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.profileForm.valid) {
      this.loaderService.isShow.next(true);

      let user = this.authService.login(
        this.profileForm.get('userName').value,
        this.profileForm.get('password').value
      );
      this.loaderService.isShow.next(false);
      if (user !== undefined) {
        this.router.navigateByUrl('/home');
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    } else {
      this.profileForm.markAllAsTouched();
    }
  }
}
