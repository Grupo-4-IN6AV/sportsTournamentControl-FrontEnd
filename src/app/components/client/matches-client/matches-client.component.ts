import { Component, OnInit } from '@angular/core';
import { TournamentRestService } from 'src/app/services/tournamentRest/tournament-rest.service';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { TeamModel } from 'src/app/models/team.model';
import Swal from 'sweetalert2';
import { TournamentModel } from 'src/app/models/tournament.model';
import { TeamRestService } from 'src/app/services/teamRest/team-rest.service';

@Component({
  selector: 'app-matches-client',
  templateUrl: './matches-client.component.html',
  styleUrls: ['./matches-client.component.css']
})
export class MatchesClientComponent implements OnInit 
{

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

  constructor
  (
    private tournamentRest : TournamentRestService,
    private teamRest: TeamRestService,
    private _CargarScripts:CargarScriptsService,
  )
  {
    this.tournament = new TournamentModel('', '', '', '');
    _CargarScripts.Carga(["script"]);
  }

  ngOnInit(): void 
  {
    this.getTournamentsUser();
  }

  getTournamentsUser()
  {
    this.tournamentRest.getTournamentsUser().subscribe({
      next: (res: any) => this.tournaments = res.tournaments,
      error: (err) => console.log(err)
    })
  }

  getTeamsUser()
  {
    this.teamRest.getTeamsUser().subscribe({
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
    this.tournamentRest.getTournament(id).subscribe({
      next: (res: any) => {
        this.idTournament = res.tournament._id;
      },
      error: (err) => {alert(err.error.message)}
    })
  }

  addTeamTournament(teamId : string)
  {
    let data = {teamId}
    this.tournamentRest.addTeamTournament(this.idTournament, data).subscribe({
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

  back()
  {
    window.location.reload();
  }
}
