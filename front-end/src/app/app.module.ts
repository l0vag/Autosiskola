import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponentModule } from '../core-component/core-component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterailModule } from './shared/materail.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthGuardService } from './shared/auth-guard.service';
import { RoleGuardService } from './shared/role-guard.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreComponentModule,
    BrowserAnimationsModule,
    MaterailModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [AuthGuardService, RoleGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
