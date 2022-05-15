import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent implements OnInit
{
  token : any;
  role : any;
  userUpdate: any;
  isShownUser: boolean = false;
  isShownTournaments: boolean = false ;
  isShownTeams: boolean = false;
  isShownSettings: boolean = false;
  isShownMatches: boolean = false;
  isShownJorneys: boolean = false;
  notShow: boolean = true ;
  disableUser: boolean = false;
  disableTournament: boolean = false;
  disableTeam: boolean = false;
  disablePanel : boolean = false;
  disableSettings: boolean = false;
  disableJourneys: boolean = false;

  constructor
  (
    private _CargarScripts:CargarScriptsService,
    private userRest : UserRestService,
    private router: Router
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
    this.isShownJorneys == this.isShownJorneys;
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
    this.isShownJorneys == this.isShownJorneys;
    this.isShownMatches == this.isShownMatches;
  }

  teamsShow()
  {
    this.isShownTeams = ! this.isShownTeams;
    this.isShownUser == this.isShownUser;
    this.isShownTournaments == this.isShownTournaments
    this.isShownSettings == this.isShownSettings;
    this.isShownJorneys == this.isShownJorneys;
    this.isShownMatches == this.isShownMatches;
  }

  matchesShow()
  {
    this.isShownMatches =! this.isShownMatches;
    this.isShownTeams == this.isShownTeams;
    this.isShownUser == this.isShownUser;
    this.isShownTournaments == this.isShownTournaments
    this.isShownSettings == this.isShownSettings;
    this.isShownJorneys == this.isShownJorneys;
  }

  jorneysShow()
  {
    this.isShownJorneys =! this.isShownJorneys;
    this.isShownTeams == this.isShownTeams;
    this.isShownUser == this.isShownUser;
    this.isShownTournaments == this.isShownTournaments
    this.isShownSettings == this.isShownSettings;
    this.isShownMatches == this.isShownMatches;
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
    this.disableTeam = false;
    this.disableJourneys = false;
    this.isShownUser = true;
    this.isShownTournaments = false;
    this.isShownTeams = false;
    this.notShow = false;
    this.isShownSettings = false;
    this.isShownJorneys = false;
    this.isShownMatches = false;
  }

  isDisableTournament()
  {
    this.disablePanel = false;
    this.disableUser = false;
    this.disableTournament = true;
    this.disableTeam = false;
    this.disableJourneys = false;
    this.isShownUser = false;
    this.isShownTournaments = true;
    this.isShownTeams = false;
    this.notShow = false;
    this.isShownSettings = false;
    this.isShownJorneys = false;
    this.isShownMatches = false;
  }

  isDisableTeam()
  {
    this.disablePanel = false;
    this.disableUser = false;
    this.disableTournament = false;
    this.disableTeam = true;
    this.disableJourneys = false;
    this.isShownUser = false;
    this.isShownTournaments = false;
    this.isShownTeams = true;
    this.notShow = false;
    this.isShownSettings = false;
    this.isShownJorneys = false;
    this.isShownMatches = false;
  }

  isDisablePanel()
  {
    this.disablePanel = true;
    this.disableUser = false;
    this.disableTournament = false;
    this.disableTeam = false;
    this.disableJourneys = false;
    this.isShownUser = false;
    this.isShownTournaments = false;
    this.isShownTeams = false;
    this.notShow = true;
    this.isShownSettings = false;
    this.isShownJorneys = false;
    this.isShownMatches = false;
  }

  isDisableSettings()
  {
    this.disablePanel = false;
    this.disableUser = false;
    this.disableTournament = false;
    this.disableTeam = false;
    this.disableJourneys = false;
    this.isShownUser = false;
    this.isShownTournaments = false;
    this.isShownTeams = false;
    this.notShow = false;
    this.isShownSettings = true;
    this.isShownJorneys = false;
    this.isShownMatches = false;
  }

  isDisableJourneys()
  {
    this.disablePanel = false;
    this.disableUser = false;
    this.disableTournament = false;
    this.disableTeam = false;
    this.disableJourneys= true;
    this.isShownUser = false;
    this.isShownTournaments = false;
    this.isShownTeams = false;
    this.notShow = false;
    this.isShownSettings = false;
    this.isShownJorneys = true;
    this.isShownMatches = false;
  }

}