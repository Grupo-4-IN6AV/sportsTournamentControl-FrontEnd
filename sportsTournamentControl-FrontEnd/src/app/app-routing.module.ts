import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeComponent } from './components/admin/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';
import { RegisterComponent } from './components/register/register.component';
import { UserAdminComponent } from './components/admin/user-admin/user-admin.component';
import { TournamentsAdminComponent } from './components/admin/tournaments-admin/tournaments-admin.component';
import { TeamsAdminComponent } from './components/admin/teams-admin/teams-admin.component';
import { HomeClientComponent } from './components/client/home-client/home-client.component';
import { UserGuard } from './guards/user.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
 /*1 solo uso */ {path: '', component: LandingPageComponent}, //RUTA POR DEFAULT | VISTA PRINCIPAL
  {path: 'landingPage', component: LandingPageComponent}, //RUTA NORMAL 1+

  //RUTAS DE ADMINISTRADOR//
  {path: 'admin/home', canActivate: [AdminGuard] ,component: HomeComponent},

  //RUTAS DE USUARIO//
  {path: 'client/home', canActivate: [UserGuard] ,component: HomeClientComponent},

  //RUTAS CUALQUIER//
  {path: 'login', component: LoginComponent}, //RUTA NORMAL
  {path: 'register', component: RegisterComponent},
  {path: '**', component: Error404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
