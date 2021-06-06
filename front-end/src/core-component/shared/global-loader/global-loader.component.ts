import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoaderService } from './shared/loader.service';

@Component({
  selector: 'app-global-loader',
  templateUrl: './global-loader.component.html',
})
export class GlobalLoaderComponent implements OnInit, OnDestroy {
  private readonly unsubscriber$: Subject<void> = new Subject();
  isShow: boolean = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.isShow$
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((data: boolean) => {
        this.isShow = data;
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
