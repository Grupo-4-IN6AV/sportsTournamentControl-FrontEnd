import { Component, OnInit } from '@angular/core';
import { TournamentRestService } from 'src/app/services/tournamentRest/tournament-rest.service';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { TeamModel } from 'src/app/models/team.model';
import Swal from 'sweetalert2';
import { TournamentModel } from 'src/app/models/tournament.model';

@Component({
  selector: 'app-tournament-client',
  templateUrl: './tournament-client.component.html',
  styleUrls: ['./tournament-client.component.css']
})
export class TournamentClientComponent implements OnInit 
{

  tournaments: any;
  tournament: TournamentModel;
  tournamentView: any;
  tournamentUpdate: any;
  searchTournament: any;

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

  back()
  {
    window.location.reload();
  }
}
