import { KeyValuePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoleType } from 'src/enums.enum';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  form: FormGroup;
  roleType = RoleType;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  get name() {
    return this.form.get('name');
  }

  get role() {
    return this.form.get('role');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.data.user.name, [Validators.required]],
      role: [this.data.user.role, [Validators.required]],
    });
  }

  save() {
    let message = { id: this.data.user.id, formData: this.form.value };
    if (this.form.valid) {
      this.dialogRef.close(message);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
