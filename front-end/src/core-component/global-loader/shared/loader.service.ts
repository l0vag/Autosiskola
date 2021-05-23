import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public isShow = new Subject<boolean>();
  public readonly isShow$: Observable<boolean> = this.isShow.asObservable();

  constructor() {}
}
