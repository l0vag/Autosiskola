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
}
