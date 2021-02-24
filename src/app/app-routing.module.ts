import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessForbiddenComponent } from './access-forbidden/access-forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'access-forbidden', component: AccessForbiddenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
