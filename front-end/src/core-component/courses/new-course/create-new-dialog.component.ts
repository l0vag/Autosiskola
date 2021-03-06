import { visitAll } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseType } from 'src/enums.enum';
import { DateHelperService } from 'src/helpers/date-helper.service';
import { ICourse } from 'src/models.model';

@Component({
  selector: 'app-create-new-dialog',
  templateUrl: './create-new-dialog.component.html',
})
export class CreateNewDialogComponent implements OnInit {
  form: FormGroup;
  courseType = CourseType;

  constructor(
    private dateHelper: DateHelperService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  get title() {
    return this.form.get('title');
  }

  get startDate() {
    return this.form.get('startDate');
  }

  get finishDate() {
    return this.form.get('finishDate');
  }

  get maxNum() {
    return this.form.get('maxNum');
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      finishDate: ['', [Validators.required]],
      maxNum: [
        10,
        [Validators.required, Validators.min(1), Validators.max(50)],
      ],
    });

    if (this.data.course as ICourse) {
      this.title.setValue(this.data.course.title);
      this.maxNum.setValue(this.data.course.maxNum);
      this.startDate.setValue(
        this.dateHelper.getDateInitValue(this.data.course.startDate)
      );
      this.finishDate.setValue(
        this.dateHelper.getDateInitValue(this.data.course.finishDate)
      );
    }
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
