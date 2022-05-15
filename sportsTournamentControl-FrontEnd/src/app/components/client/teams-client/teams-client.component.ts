import { Component, OnInit } from '@angular/core';
import { TeamRestService } from 'src/app/services/teamRest/team-rest.service';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { TeamModel } from 'src/app/models/team.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teams-client',
  templateUrl: './teams-client.component.html',
  styleUrls: ['./teams-client.component.css']
})
export class TeamsClientComponent implements OnInit 
{

  teams: any;
  team: TeamModel;
  teamView: any;
  teamUpdate: any;
  searchTeam: any;

  constructor
  (
    private teamRest : TeamRestService,
    private _CargarScripts:CargarScriptsService,
  ) 
  {
    this.team = new TeamModel('', '', '', '');
    _CargarScripts.Carga(["script"]);
  }

  ngOnInit(): void 
  {
    this.getTeamsUser();
  }

  getTeamsUser()
  {
    this.teamRest.getTeamsUser().subscribe({
      next: (res: any) => this.teams = res.teamsExist,
      error: (err) => console.log(err)
    })
  }

  saveTeamUser(addTeamForm: any) {
    this.teamRest.saveTeamUser(this.team).subscribe
      ({
        next: (res: any) => {
          Swal.fire
            ({
              icon: 'success',
              title: res.message,
              confirmButtonColor: '#28B463'
            });
          this.getTeamsUser();
          addTeamForm.reset();
        },
        error: (err: any) => {
          Swal.fire({
            icon: 'error',
            title: err.message || err.error,
            confirmButtonColor: '#E74C3C'
          });
          addTeamForm.reset();
        },
      })
  }

  getTeam(id: string) 
  {
    this.teamRest.getTeam(id).subscribe({
      next: (res: any) => {
        this.teamView = res.team;
        this.teamUpdate = res.team;
      },
      error: (err) => {alert(err.error.message)}
    })
  }

  updateTeam()
  {
    this.teamRest.updateTeamUser(this.teamUpdate._id, this.teamUpdate).subscribe({

      next: (res:any)=> 
      {
        Swal.fire({
          icon:'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getTeamsUser();
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

  deleteTeamUser(id: string) 
  {
    Swal.fire({
      title: 'Do you want to delete this Team?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.teamRest.deleteTeamUser(id).subscribe({
          next: (res: any) => {
            Swal.fire({
              title: res.message + ' ' + res.deleteTeam.name,
              icon: 'success',
              position: 'center',
              showConfirmButton: false,
              timer: 2000
            });
            this.getTeamsUser();
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
        Swal.fire('Team Not Deleted', '', 'info')
      }
    })
  }

  back()
  {
    window.location.reload();
  }

}
