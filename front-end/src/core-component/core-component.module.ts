import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterailModule } from 'src/app/shared/materail.module';
import { CoursesComponent } from './courses/courses.component';
import { ExamsComponent } from './exams/exams.component';
import { UsersComponent } from './users/users.component';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { LoginComponent } from './login/login.component';
import { CreateNewDialogComponent } from './courses/new-course/create-new-dialog.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ScrollToTopComponent,
    RegisterComponent,
    CoursesComponent,
    ExamsComponent,
    UsersComponent,
    GlobalLoaderComponent,
    LoginComponent,
    CreateNewDialogComponent,
    ProfileComponent,
    ProfileCardComponent,
    StudentComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterailModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ScrollToTopComponent,
    GlobalLoaderComponent,
  ],
})
export class CoreComponentModule {}
