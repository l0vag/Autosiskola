import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-new-exam',
  templateUrl: './create-new-exam.component.html',
})
export class CreateNewExamComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  get title() {
    return this.form.get('title');
  }

  get examDate() {
    return this.form.get('title');
  }

  get examTime() {
    return this.form.get('title');
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      examDate: ['', [Validators.required]],
      examTime: ['', Validators.required],
    });
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
