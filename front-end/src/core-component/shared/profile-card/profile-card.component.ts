import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/models.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  @Input() person: IUser;

  constructor() {}

  ngOnInit(): void {}
}
