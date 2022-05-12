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
  isShownUser: boolean = false;
  isShownTournaments: boolean = false ;
  isShownTeams: boolean = false ;
  notShow: boolean = true ;
  disableUser: boolean = false;
  disableTournament: boolean = false;
  disableTeam: boolean = false;
  disablePanel : boolean = false;

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
  }

  teamsShow()
  {
    this.isShownTeams = ! this.isShownTeams;
    this.isShownUser == this.isShownUser;
    this.isShownTournaments == this.isShownTournaments
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
  }

}