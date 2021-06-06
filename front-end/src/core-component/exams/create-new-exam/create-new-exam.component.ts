import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExamType } from 'src/enums.enum';
import { DateHelperService } from 'src/helpers/date-helper.service';
import { IExam } from 'src/models.model';

@Component({
  selector: 'app-create-new-exam',
  templateUrl: './create-new-exam.component.html',
})
export class CreateNewExamComponent implements OnInit {
  form: FormGroup;
  examType = ExamType;

  constructor(
    private dateHelper: DateHelperService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  get title() {
    return this.form.get('title');
  }

  get examDate() {
    return this.form.get('examDate');
  }

  get examTime() {
    return this.form.get('examTime');
  }

  get maxNum() {
    return this.form.get('maxNum');
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      examDate: ['', [Validators.required]],
      examTime: ['', Validators.required],
      maxNum: [
        10,
        [Validators.required, Validators.min(1), Validators.max(50)],
      ],
    });
    if (this.data.exam as IExam) {
      console.log('EXAM: ', this.data.exam);
      this.title.setValue(this.data.exam.title);
      this.maxNum.setValue(this.data.exam.maxNum);
      this.examDate.setValue(
        this.dateHelper.getDateInitValue(this.data.exam.examDate)
      );
      this.examTime.setValue(
        this.dateHelper.getTimeInitValue(this.data.exam.examDate)
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
