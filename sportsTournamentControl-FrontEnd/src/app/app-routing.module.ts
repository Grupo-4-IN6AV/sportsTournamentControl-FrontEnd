import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
 /*1 solo uso */ {path: '', component: HomeComponent}, //RUTA POR DEFAULT | VISTA PRINCIPAL
  {path: 'home', component: HomeComponent}, //RUTA NORMAL 1+
  {path: 'login', component: LoginComponent}, //RUTA NORMAL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
