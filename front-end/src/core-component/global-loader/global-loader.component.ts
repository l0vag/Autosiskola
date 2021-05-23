import { Component, OnInit } from '@angular/core';
import { LoaderService } from './shared/loader.service';

@Component({
  selector: 'app-global-loader',
  templateUrl: './global-loader.component.html',
})
export class GlobalLoaderComponent implements OnInit {
  isShow: boolean = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.isShow$.subscribe((data: boolean) => {
      this.isShow = data;
    });
  }
}
