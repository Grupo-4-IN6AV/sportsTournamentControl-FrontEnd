import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';
import { UserAdminService } from 'src/app/services/userRest/user-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  token : any;
  role : any;
  userUpdate: any;
  isShownUser: boolean = false;
  isShownTournaments: boolean = false ;
  isShownTeams: boolean = false;
  isShownSettings: boolean = false;
  isShownMatches: boolean = false;
  isShownJourneys: boolean = false;
  notShow: boolean = true ;
  disableUser: boolean = false;
  disableTournament: boolean = false;
  disableTeam: boolean = false;
  disablePanel : boolean = false;
  disableSettings: boolean = false;

  constructor
  (
    private _CargarScripts:CargarScriptsService,
    private userRest : UserRestService,
    private userAdminRest: UserAdminService,
  )
  {
    _CargarScripts.Carga(["home-component"])
  }

  ngOnInit(): void
  {
    this.token = this.userRest.getToken();
    this.role = this.userRest.getIdentity().role;
  }

  userShow()
  {
    this.isShownUser =! this.isShownUser;
    this.isShownTournaments == this.isShownTournaments;
    this.isShownTeams == this.isShownTeams;
    this.isShownSettings == this.isShownSettings;
    this.isShownJourneys == this.isShownJourneys;
    this.isShownMatches == this.isShownMatches;
  }

  dontShowMain()
  {
    this.notShow = ! this.notShow;
  }

  tournamentsShow()
  {
    this.isShownTournaments = ! this.isShownTournaments;
    this.isShownUser == this.isShownUser;
    this.isShownTeams == this.isShownTeams
    this.isShownSettings == this.isShownSettings;
    this.isShownJourneys == this.isShownJourneys;
    this.isShownMatches == this.isShownMatches;
  }

  teamsShow()
  {
    this.isShownTeams = ! this.isShownTeams;
    this.isShownUser == this.isShownUser;
    this.isShownTournaments == this.isShownTournaments
    this.isShownSettings == this.isShownSettings;
    this.isShownJourneys == this.isShownJourneys;
    this.isShownMatches == this.isShownMatches;
  }

  matchesShow()
  {
    this.isShownMatches =! this.isShownMatches;
    this.isShownTeams == this.isShownTeams;
    this.isShownUser == this.isShownUser;
    this.isShownTournaments == this.isShownTournaments
    this.isShownSettings == this.isShownSettings;
    this.isShownJourneys == this.isShownJourneys;
  }

  journeysShow()
  {
    this.isShownJourneys =! this.isShownJourneys;
    this.isShownMatches == this.isShownMatches;
    this.isShownTeams == this.isShownTeams;
    this.isShownUser == this.isShownUser;
    this.isShownTournaments == this.isShownTournaments
    this.isShownSettings == this.isShownSettings;
  }

  logOut()
  {
    localStorage.clear(); 
  }

  isDisableUser()
  {
    this.disablePanel = false;
    this.disableUser = true;
    this.disableTournament = false;
    this.disableTeam = false
    this.isShownUser = true;
    this.isShownTournaments = false;
    this.isShownTeams = false;
    this.notShow = false;
    this.isShownSettings = false;
    this.isShownMatches = false;
    this.isShownJourneys = false;
  }

  isDisableTournament()
  {
    this.disablePanel = false;
    this.disableUser = false;
    this.disableTournament = true;
    this.disableTeam = false;
    this.isShownUser = false;
    this.isShownTournaments = true;
    this.isShownTeams = false;
    this.notShow = false;
    this.isShownSettings = false;
    this.isShownMatches = false;
    this.isShownJourneys = false;
  }

  isDisableTeam()
  {
    this.disablePanel = false;
    this.disableUser = false;
    this.disableTournament = false;
    this.disableTeam = true;
    this.isShownUser = false;
    this.isShownTournaments = false;
    this.isShownTeams = true;
    this.notShow = false;
    this.isShownSettings = false;
    this.isShownMatches = false;
    this.isShownJourneys = false;
  }

  isDisablePanel()
  {
    this.disablePanel = true;
    this.disableUser = false;
    this.disableTournament = false;
    this.disableTeam = false;
    this.isShownUser = false;
    this.isShownTournaments = false;
    this.isShownTeams = false;
    this.notShow = true;
    this.isShownSettings = false;
    this.isShownMatches = false;
    this.isShownJourneys = false;
  }

  isDisableSettings()
  {
    this.disablePanel = false;
    this.disableUser = false;
    this.disableTournament = false;
    this.disableTeam = false;
    this.isShownUser = false;
    this.isShownTournaments = false;
    this.isShownTeams = false;
    this.notShow = false;
    this.isShownSettings = true;
    this.isShownMatches = false;
    this.isShownJourneys = false;
  }
}