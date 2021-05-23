import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoaderService } from '../global-loader/shared/loader.service';
import { RegisterService } from './shared/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  profileForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private registerService: RegisterService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {}

  submit() {
    this.loaderService.isShow.next(true);
    console.log(this.profileForm);
    this.registerService
      .register({
        name: this.profileForm.get('userName').value,
        password: this.profileForm.get('password').value,
      })
      .subscribe(
        (data) => console.log('post answer: ', data),
        (error) => console.log('ERROR: ', error),
        () => this.loaderService.isShow.next(false)
      );
  }
}
