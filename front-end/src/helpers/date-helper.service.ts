import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateHelperService {
  constructor() {}

  dateCreator(dateString: string, timeString: string): Date {
    let dateObj = new Date(dateString + 'T' + timeString);

    return dateObj;
  }

  getDateInitValue(dateString: string): string {
    let date = new Date(dateString);
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1);
    month = month.padStart(2, '0');
    let day = String(date.getDate());
    day = day.padStart(2, '0');

    return year + '-' + month + '-' + day;
  }

  getTimeInitValue(dateString: string): string {
    let date = new Date(dateString);
    let hours = String(date.getHours());
    hours = hours.padStart(2, '0');
    let mins = String(date.getMinutes());
    mins = mins.padStart(2, '0');

    return hours + ':' + mins;
  }
}
