import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessDeniedComponent } from 'src/core-component/access-denied/access-denied.component';
import { ApplyOnCoursesComponent } from 'src/core-component/apply-on-courses/apply-on-courses.component';
import { CoursesComponent } from 'src/core-component/courses/courses.component';
import { ExamsComponent } from 'src/core-component/exams/exams.component';
import { HomeComponent } from 'src/core-component/home/home.component';
import { LoginComponent } from 'src/core-component/login/login.component';
import { PageNotFoundComponent } from 'src/core-component/page-not-found/page-not-found.component';
import { ProfileComponent } from 'src/core-component/profile/profile.component';
import { RegisterComponent } from 'src/core-component/register/register.component';
import { StudentComponent } from 'src/core-component/student/student.component';
import { UsersComponent } from 'src/core-component/users/users.component';
import { AuthGuardService as AuthGuard } from './shared/auth-guard.service';
import { RoleGuardService as RoleGuard } from './shared/role-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'exams', component: ExamsComponent, canActivate: [AuthGuard] },
  {
    path: 'student/:id',
    component: StudentComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRoles: ['ROLE_ADMIN', 'ROLE_INSTRUCTOR'],
    },
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRoles: ['ROLE_ADMIN', 'ROLE_INSTRUCTOR'],
    },
  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'apply',
    component: ApplyOnCoursesComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRoles: ['ROLE_ADMIN', 'ROLE_STUDENT'],
    },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
