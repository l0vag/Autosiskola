import { Injectable } from '@angular/core';
import { IWorkWeek } from './../models.model';
import { freeWorkWeek } from './../data.mock';

@Injectable({
  providedIn: 'root',
})
export class WeekCreatorService {
  constructor() {}

  public generateCalendar(): Array<IWorkWeek> {
    let calendar: Array<IWorkWeek> = [];
    let currentWeek = this.getNumberOfWeek();

    for (let i = 0; i < 5; ++i) {
      calendar.push({
        number: currentWeek,
        workDays: freeWorkWeek,
      });
      ++currentWeek;
    }
    return calendar;
  }

  private getNumberOfWeek(): number {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (Number(today) - Number(firstDayOfYear)) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7) - 1;
  }
}
