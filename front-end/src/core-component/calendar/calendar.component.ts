import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/auth.service';
import { IUser, IWorkWeek } from 'src/models.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {
  private readonly unsubscriber$: Subject<void> = new Subject();
  weeks: IWorkWeek[];
  workWeek: IWorkWeek;
  authUser: IUser;

  constructor(private auth: AuthService) {}

  async ngOnInit(): Promise<void> {
    await this.auth.user
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((user) => (this.authUser = user));
    this.weeks = this.authUser.weeks;
    console.log('weeks ', this.weeks);
  }

  setWeekNum(weekNumber: number) {
    console.log('id: ', weekNumber);
    this.workWeek = this.weeks.find((week) => {
      return week.number === weekNumber;
    });
    console.log('workWeek: ', this.workWeek);
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
