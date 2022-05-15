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
export class JourneyClientComponent implements OnInit 
{

  tournaments: any;
  journey: JourneyModel;
  viewJourney: any
  journeys: any;
  resetValue: any;
  searchTournament: any;
  notShow: boolean = true ;
  isShownJourneys : boolean = false;
  idTournament: any;
  matchesJourney : any;
  teams : any;
  journeyId : any;
  matches: any;

  constructor
  (
    private tournamentRest : TournamentRestService,
    private teamRest: TeamRestService,
    private _CargarScripts:CargarScriptsService,
  ) 
  { 
    this.journey = new JourneyModel('', 0, '', 0,);
    _CargarScripts.Carga(["script"]);
  }

  ngOnInit(): void 
  {
    this.getTournamentsUser();
    this.getTeamsUser();
  }

  getTournamentsUser()
  {
    this.tournamentRest.getTournamentsUser().subscribe({
      next: (res: any) => this.tournaments = res.tournaments,
      error: (err) => console.log(err)
    })
  }

  showCards()
  {
    this.notShow = ! this.notShow;
  }

  showJourneys()
  {
    this.isShownJourneys =! this.isShownJourneys;
  }

  getJourneysTournament(id : string)
  {
    this.tournamentRest.getJourneyTournaments(id).subscribe({
      next: (res: any) => {
        this.journeys = res.journeys
      },
      error: (err) => console.log(err)
    })
  }

  getTournament(id : string)
  {
    this.tournamentRest.getTournament(id).subscribe({
      next: (res: any) => {
        this.idTournament = res.tournament._id;
      },
      error: (err) => console.log(err)
    })
  }

  getJourney(id:string)
  {
    this.tournamentRest.getJourney(id).subscribe({
      next: (res:any) =>
      {
        this.journeyId = res.journey._id
      },
      error: (err) => console.log(err)
    })
  }

  saveJourney(addJourneyForm: any)
  {
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
    console.log(data);
    this.tournamentRest.addMatchTournament(this.journeyId, data).subscribe({
      next: (res:any) =>
      {
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

  getTeamsUser()
  {
    this.teamRest.getTeamsUser().subscribe({
      next: (res: any) => this.teams = res.teamsExist,
      error: (err) => console.log(err)
    })
  }


  
  deleteJourney(id:string)
  {
    let tournament = this.idTournament;
    let data = {tournament};
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
      } else if (result.isDenied) 
      {
        Swal.fire('Journey Not Deleted', '', 'info')
      }
    })
  }

  back()
  {
    window.location.reload();
  }

}
