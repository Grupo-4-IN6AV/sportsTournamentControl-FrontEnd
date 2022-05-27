import { Component, OnInit, OnDestroy } from '@angular/core';
import { TournamentRestService } from 'src/app/services/tournamentRest/tournament-rest.service';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import Swal from 'sweetalert2';
import { TournamentModel } from 'src/app/models/tournament.model';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-tournament-client',
  templateUrl: './tournament-client.component.html',
  styleUrls: ['./tournament-client.component.css']
})
export class TournamentClientComponent implements OnInit, OnDestroy
{

  tournaments: any;
  tournament: TournamentModel;
  tournamentView: any;
  viewTournament: any;
  resetValue: any;
  tournamentTable: any;
  tournamentGrafic: any;
  tournamentUpdate: any;
  searchTournament: any;
  isShownTable: boolean = false;
  notShow: boolean = true ;
  chart: any
  myChart : any;
  shownGrafic: boolean = false;


  constructor
  (
    private tournamentRest : TournamentRestService,
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

  getTournament(id: string) 
  {
    this.tournamentRest.getTournament(id).subscribe({
      next: (res: any) => {
        this.tournamentUpdate = res.tournament;
        this.viewTournament = res.tournament
      },
      error: (err) => {alert(err.error.message)}
    })
  }


  saveTournamentUser(addTournamentForm: any) {
    this.tournamentRest.saveTournamentUser(this.tournament).subscribe
      ({
        next: (res: any) => {

          Swal.fire
            ({
              icon: 'success',
              title: res.message,
              confirmButtonColor: '#28B463'
            });
          addTournamentForm.reset();
          this.getTournamentsUser();
        },
        error: (err: any) => {
          Swal.fire({
            icon: 'error',
            title: err.error.message || err.error,
            confirmButtonColor: '#E74C3C'
          });
          addTournamentForm.reset();
        },
      })
  }


  updateTournament()
  {
    this.tournamentRest.updateTournament(this.tournamentUpdate._id, this.tournamentUpdate).subscribe({
      next: (res:any)=> 
      {
        Swal.fire({
          icon:'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getTournamentsUser();
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


  deleteTournament(id: string) 
  {
    Swal.fire({
      title: 'Do you want to delete this Tournament?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.tournamentRest.deleteTournament(id).subscribe({
          next: (res: any) => {
            Swal.fire({
              title: res.message + ' ' + res.deleteTournament.name,
              icon: 'success',
              position: 'center',
              showConfirmButton: false,
              timer: 2000
            });
            this.getTournamentsUser();
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
        Swal.fire('Tournament Not Deleted', '', 'info')
      }
    })
  }


  tableTournament(id : string)
  {
    this.tournamentRest.tableTournament(id).subscribe({
      next: (res: any) => 
      {
        this.tournamentTable = res.teamsData
      },
      error: (err) => {console.log(err)}
    })
    this.tournamentTable = this.resetValue
  }

  shownTable()
  {
    this.isShownTable =! this.isShownTable;
  }

  showCards()
  {
    this.notShow =! this.notShow;
  }
  
  showGrafic()
  {
    this.shownGrafic =! this.shownGrafic;
  }

  back()
  {
    window.location.reload();
  }

  grafic(id : string)
  {
    this.tournamentRest.tableTournament(id).subscribe({
      next: (res: any) => 
      {
        this.tournamentGrafic = res.teamsData;
        const setDataSets = []

        for (var key=0; key < this.tournamentGrafic.length; key ++)
        {
          var data =  this.tournamentGrafic[key];
          setDataSets.push({label:data.team.name, data:[data.teamPoints]});
        }

        this.chart = new Chart('canvas', 
        {
          type: 'bar',
          data:
          {
              labels: [this.viewTournament.name],
              datasets: setDataSets,
          }
        });
      },
      error: (err) => {console.log(err)}
    })
    this.tournamentGrafic = this.resetValue
  }

  ngOnDestroy() {if (this.chart) {this.chart.destroy();}}
  

}
