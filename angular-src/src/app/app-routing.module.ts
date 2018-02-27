import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { GerenteDashboardComponent } from './components/gerente-dashboard/gerente-dashboard.component'
import { AuthGuard } from './services/guard.service';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "client", component: ClientDashboardComponent, canActivate:[AuthGuard]}, 
  { path: "client/register", component: RegisterComponent },
  { path: "gerente", component: GerenteDashboardComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
