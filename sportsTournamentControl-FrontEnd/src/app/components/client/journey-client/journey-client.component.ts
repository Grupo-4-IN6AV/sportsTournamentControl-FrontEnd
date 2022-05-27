import { Component, OnInit } from '@angular/core';
import { JourneyModel } from 'src/app/models/journey.model';
import Swal from 'sweetalert2';
import { TeamRestService } from 'src/app/services/teamRest/team-rest.service';
import { TournamentRestService } from 'src/app/services/tournamentRest/tournament-rest.service';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-journey-client',
  templateUrl: './journey-client.component.html',
  styleUrls: ['./journey-client.component.css']
})
export class JourneyClientComponent implements OnInit {

  tournaments: any;
  journey: JourneyModel;
  viewJourney: any
  viewTournament: any;
  journeys: any;
  resetValue: any;
  searchTournament: any;
  notShow: boolean = true;
  idTournament: any;
  isShownJourneys: boolean = false;
  isShownTable: boolean = false;
  matchesJourney: any;
  teams: any;
  journeyId: any;
  matches: any;
  journeyView: any;
  match: any;

  constructor
    (
      private tournamentRest: TournamentRestService,
      private teamRest: TeamRestService,
      private _CargarScripts: CargarScriptsService,
  ) {
    this.journey = new JourneyModel('', 0, '', 0,);
    _CargarScripts.Carga(["script"]);
  }

  ngOnInit(): void {
    this.getTournamentsUser();
  }

  getTournamentsUser() {
    this.tournamentRest.getTournamentsUser().subscribe({
      next: (res: any) => this.tournaments = res.tournaments,
      error: (err) => console.log(err)
    })
  }

  showCards() {
    this.notShow = !this.notShow;
  }

  showJourneys() {
    this.isShownJourneys = !this.isShownJourneys;
  }

  showTable() {
    this.isShownTable = !this.isShownTable;
  }

  getJourneysTournament(id: string) {
    this.tournamentRest.getJourneyTournaments(id).subscribe({
      next: (res: any) => {
        this.journeys = res.journeys
      },
      error: (err) => console.log(err)
    })
  }

  getTournament(id: string) {
    this.tournamentRest.getTournament(id).subscribe({
      next: (res: any) => {
        this.idTournament = res.tournament._id;
        this.viewTournament = res.tournament;
      },
      error: (err) => console.log(err)
    })
  }

  getJourney(id: string) {
    this.tournamentRest.getJourney(id).subscribe({
      next: (res: any) => {
        this.journeyId = res.journey._id
        this.journeyView = res.journey
      },
      error: (err) => console.log(err)
    })
    this.journeyView = this.resetValue;
  }

  saveJourney(addJourneyForm: any) {
    let tournament = this.idTournament;
    let localTeam = this.journey.localTeam;
    let visitingTeam = this.journey.visitingTeam;
    let localScore = this.journey.localScore;
    let visitingScore = this.journey.visitingScore;
    let data =
    {
      tournament,
      localTeam,
      localScore,
      visitingTeam,
      visitingScore
    }
    this.tournamentRest.addMatchTournament(this.journeyId, data).subscribe({
      next: (res: any) => {
        Swal.fire
          ({
            icon: 'success',
            title: res.message,
            confirmButtonColor: '#28B463'
          });
        addJourneyForm.reset();
      },
      error: (err: any) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
        addJourneyForm.reset();
      },
    })
  }

  getTeamsUser(id:string) {
    this.tournamentRest.getTeamTournament(id).subscribe({
      next: (res: any) => {this.teams = res.teamsExist; console.log(this.teams)},
      error: (err) => console.log(err)
    })
  }

  getMatches(id: string) {
    this.tournamentRest.getMatches(id).subscribe({
      next: (res: any) => this.matches = res.match,
      error: (err) => console.log(err)
    })
  }

  getMatch(match: string) 
  {
    let matchExist = { match };
    console.log(match);
    console.log(this.journeyId);
    this.tournamentRest.getMatch(this.journeyId, matchExist).subscribe({
      next: (res: any) => {this.match = res.match, console.log(this.match)},
      error: (err) => console.log(err)
    })
  }

  deleteJourney(id: string) {
    let tournament = this.idTournament;
    let data = { tournament };
    Swal.fire({
      title: 'Do you want to delete this Journey?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.tournamentRest.deleteJourney(id, data).subscribe({
          next: (res: any) => {
            Swal.fire({
              title: 'Matches of the journey deleted',
              icon: 'success',
              position: 'center',
              showConfirmButton: false,
              timer: 2000
            });
          },
          error: (err) => Swal.fire({
            title: err.error.message,
            icon: 'error',
            position: 'center',
            timer: 3000
          })
        })
      } else if (result.isDenied) {
        Swal.fire('Journey Not Deleted', '', 'info')
      }
    })
  }

  deleteMatch(id: string) 
  {
    let journeyId = this.journeyId;
    let matchId = id;
    let tournament = this.idTournament;
    let data = {matchId,tournament};
    Swal.fire({
      title: 'Do you want to delete this Journey?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.tournamentRest.deleteMatch(journeyId, data).subscribe({
          next: (res: any) => {
            Swal.fire({
              title: 'Matches of the journey deleted',
              icon: 'success',
              position: 'center',
              showConfirmButton: false,
              timer: 2000
            });
            this.getMatches(journeyId);
          },
          error: (err) => Swal.fire({
            title: err.error.message,
            icon: 'error',
            position: 'center',
            timer: 3000
          })
        })
      } else if (result.isDenied) {
        Swal.fire('Journey Not Deleted', '', 'info')
      }
    })
  }

  updateMatch()
  {
    let journeyId = this.journeyId;
    let params = 
    { 
      matchId: this.match._id, 
      tournament: this.idTournament,
      localTeam: this.match.localTeam,
      visitingTeam: this.match.visitingTeam,
      localScore: this.match.localScore,
      visitingScore: this.match.visitingScore
    };
    this.tournamentRest.updateMatch(this.journeyId, params).subscribe({
      next: (res:any)=> 
      {
        Swal.fire({
          icon:'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getMatches(journeyId);
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
  }

  back() {
    window.location.reload();
  }

}
