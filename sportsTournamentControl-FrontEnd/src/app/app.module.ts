import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/admin/home/home.component'
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { Error404Component } from './components/error404/error404.component';
import { UserAdminComponent } from './components/admin/user-admin/user-admin.component';
import { TournamentsAdminComponent } from './components/admin/tournaments-admin/tournaments-admin.component';
import { TeamsAdminComponent } from './components/admin/teams-admin/teams-admin.component';
import { SearchUserPipe } from './pipes/search-user.pipe';
import { HomeClientComponent } from './components/client/home-client/home-client.component';
import { UserClientComponent } from './components/client/user-client/user-client.component';
import { SearchTeamPipe } from './pipes/search-team.pipe';
import { TeamsClientComponent } from './components/client/teams-client/teams-client.component';
import { TournamentClientComponent } from './components/client/tournament-client/tournament-client.component';
import { SearchTournamentPipe } from './pipes/search-tournament.pipe';
import { MatchesClientComponent } from './components/client/matches-client/matches-client.component';
import { NgChartsModule } from 'ng2-charts';
import { JourneyClientComponent } from './components/client/journey-client/journey-client.component';
import {JourneyAdminComponent} from './components/admin/journey-admin/journey-admin.component';
import {MatchesAdminComponent} from './components/admin/matches-admin/matches-admin.component';
import Swal from 'sweetalert2';
@NgModule({
  declarations: 
  [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    Error404Component,
    UserAdminComponent,
    TournamentsAdminComponent,
    TeamsAdminComponent,
    SearchUserPipe,
    HomeClientComponent,
    UserClientComponent,
    SearchUserPipe,
    SearchTeamPipe,
    TeamsClientComponent,
    TournamentClientComponent,
    SearchTournamentPipe,
    MatchesClientComponent,
    JourneyClientComponent,
    JourneyAdminComponent,
    MatchesAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
