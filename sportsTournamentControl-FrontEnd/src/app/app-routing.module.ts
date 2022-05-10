import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
 /*1 solo uso */ {path: '', component: LandingPageComponent}, //RUTA POR DEFAULT | VISTA PRINCIPAL
  {path: 'landingPage', component: LandingPageComponent}, //RUTA NORMAL 1+
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent}, //RUTA NORMAL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
