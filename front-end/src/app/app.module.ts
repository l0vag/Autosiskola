import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponentModule } from '../core-component/core-component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterailModule } from './shared/materail.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreComponentModule,
    BrowserAnimationsModule,
    MaterailModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
