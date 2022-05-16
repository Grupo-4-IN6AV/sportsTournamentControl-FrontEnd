import { Component, OnInit } from '@angular/core';
import { TournamentRestService } from 'src/app/services/tournamentRest/tournament-rest.service';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { TeamModel } from 'src/app/models/team.model';
import Swal from 'sweetalert2';
import { TournamentModel } from 'src/app/models/tournament.model';
import { TeamRestService } from 'src/app/services/teamRest/team-rest.service';
import { UserAdminService } from 'src/app/services/userRest/user-admin.service';


@Component({
  selector: 'app-matches-admin',
  templateUrl: './matches-admin.component.html',
  styleUrls: ['./matches-admin.component.css']
})
export class MatchesAdminComponent implements OnInit {

  searchTeam: any;
  tournaments: any;
  tournament: TournamentModel;
  resetValue: any;
  searchTournament: any;
  isShownTable: boolean = false;
  notShow: boolean = true ;
  acordeonShown: any;
  acordeonTeams: any
  idTournament: any;
  idTeam: any;
  users:any;
  team: TeamModel;
  teamValue:any;
  teamUser: any;

  constructor(
    private tournamentRest : TournamentRestService,
    private teamRest: TeamRestService,
    private _CargarScripts:CargarScriptsService,
    private userRest: UserAdminService,
  ) 
  {
    this.tournament = new TournamentModel('', '', '', '');
    this.team = new TeamModel('', '', '', '');
    _CargarScripts.Carga(["script"]);

   }

  ngOnInit(): void {
    this.getTournamentsByAdmin();
    this.getUsers();
  }

  getTournamentsByAdmin()
  {
    this.tournamentRest.getTournamentsbyAdmin().subscribe({
      next: (res: any) => this.tournaments = res.tournaments,
      error: (err) => console.log(err)
    })
  }

  getTournamentsByAdminForUser(id: string){
    this.tournamentRest.getTournamentsbyAdminForUser(id).subscribe({
      next: (res: any) => this.teamUser = res.teams,
      error: (err) => console.log(err)
    })
  }

  getTeamsAdmin()
  {
    this.teamRest.getTeams().subscribe({
      next: (res: any) => {this.acordeonTeams = res.teamsExist},
      error: (err) => console.log(err)
      
    })
  }

  shownTable()
  {
    this.isShownTable =! this.isShownTable;
  }

  showCards()
  {
    this.notShow = ! this.notShow;
  }

  getTournament(id: string) 
  {
    this.tournamentRest.getTournamentAdmin(id).subscribe({
      next: (res: any) => {
        this.idTournament = res.tournament._id;
      },
      error: (err) => {alert(err.error.message)}
    })
  }

  addTeamTournamentAdmin(teamID:string,userID: string)
  {
    let tournamentId = this.idTournament;
    let teamId = teamID;
    let user = userID
    let data = {teamId,user}
    console.log(data)
    this.tournamentRest.addTeamTournamentAdmin(tournamentId, data).subscribe({
      next: (res:any)=> 
      {
        Swal.fire({
          icon:'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
      },
      error: (err)=>
      {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
    this.idTeam = this.resetValue;
  }

  getUsers()
  {
    this.userRest.getUsers().subscribe({
      next: (res:any)=> this.users = res.user,
      error: (err)=> console.log(err)
    })
  }


  saveTeamAdmin(addTeamForm: any) {
    this.teamRest.saveTeamAdmin(this.team).subscribe
      ({
        next: (res: any) => {
          Swal.fire
            ({
              icon: 'success',
              title: res.message,
              confirmButtonColor: '#28B463'
            });
          this.getTeamsAdmin();
          addTeamForm.reset();
        },
        error: (err: any) => {
          Swal.fire({
            icon: 'error',
            title: err.error.message || err.error,
            confirmButtonColor: '#E74C3C'
          });
          addTeamForm.reset();
        },
      })
  }

  setValue(teamId : string)
  {
    this.teamValue = teamId;
  }

  back()
  {
    window.location.reload();
  }

}