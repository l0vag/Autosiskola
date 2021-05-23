import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from 'src/core-component/courses/courses.component';
import { ExamsComponent } from 'src/core-component/exams/exams.component';
import { HomeComponent } from 'src/core-component/home/home.component';
import { PageNotFoundComponent } from 'src/core-component/page-not-found/page-not-found.component';
import { RegisterComponent } from 'src/core-component/register/register.component';
import { UsersComponent } from 'src/core-component/users/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'exams', component: ExamsComponent },
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
