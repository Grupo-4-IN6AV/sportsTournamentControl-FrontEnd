import { Component, OnInit } from '@angular/core';
import { JourneyRestService } from 'src/app/services/journeyRest/journey-rest.service';
import { TournamentRestService } from 'src/app/services/tournamentRest/tournament-rest.service';
import { TeamRestService } from 'src/app/services/teamRest/team-rest.service';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import Swal from 'sweetalert2';
import { JourneyModel } from 'src/app/models/journey.model';
import { TournamentModel } from 'src/app/models/tournament.model';

@Component({
  selector: 'app-journey-client',
  templateUrl: './journey-client.component.html',
  styleUrls: ['./journey-client.component.css']
})
export class JourneyClientComponent implements OnInit {

  journeys: any;
  journey: JourneyModel;
  tournaments: any;
  tournament: TournamentModel;
  notShow: boolean = true ;
  isShownCards: boolean = false;

  constructor(
    private tournamentRest : TournamentRestService,
    private journeyRest: JourneyRestService,
    private _CargarScripts:CargarScriptsService
  ) { 
    this.tournament = new TournamentModel('', '', '', '');
    this.journey = new JourneyModel('', '', '');
    _CargarScripts.Carga(["script"]);
  }

  ngOnInit(): void {
    this.getTournamentsUser()
  }

  getJourneysTornament(id:string)
  {
    this.journeyRest.getJourneysTornament(id).subscribe({
      next: (res: any) =>{
        this.journeys = res.journeys,
        console.log(this.journeys)
      },
      error: (err) => console.log(err)
    })
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

  shownTable()
  {
    this.isShownCards =! this.isShownCards;
  }

}
