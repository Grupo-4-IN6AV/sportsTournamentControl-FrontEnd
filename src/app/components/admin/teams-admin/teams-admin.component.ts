import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { TeamModel } from 'src/app/models/team.model';
import { TeamRestService } from 'src/app/services/teamRest/team-rest.service';
import { UserAdminService } from 'src/app/services/userRest/user-admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teams-admin',
  templateUrl: './teams-admin.component.html',
  styleUrls: ['./teams-admin.component.css']
})
export class TeamsAdminComponent implements OnInit 
{
  teams: any;
  team: TeamModel;
  teamSearch: any;
  teamView: any;
  teamUpdate: any;
  searchTeam: any;
  users: any;
  viewTeam: any;

  constructor
  (
    private teamRest : TeamRestService,
    private userRest : UserAdminService,
    private _CargarScripts:CargarScriptsService,
  ) 
  {
    this.team = new TeamModel('', '', '', '');
    _CargarScripts.Carga(["script"]);
  }

  ngOnInit(): void 
  {
    this.getTeamsAdmin();
    this.getUsers();
  }

  getTeamsAdmin()
  {
    this.teamRest.getTeams().subscribe({
      next: (res: any) => this.teams = res.teamsExist,
      error: (err) => console.log(err)
    })
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

  getTeam(id: string) {
    this.teamRest.getTeam(id).subscribe({
      next: (res: any) => {
        this.viewTeam = res.team;
        this.teamUpdate = res.team;
      },
      error: (err) => {alert(err.error.message)}
    })
  }

  deleteTeam(id: string) 
  {
    Swal.fire({
      title: 'Do you want to delete this Team?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.teamRest.deleteTeam(id).subscribe({
          next: (res: any) => {
            Swal.fire({
              title: res.message + ' ' + res.deleteTeam.name,
              icon: 'success',
              position: 'center',
              showConfirmButton: false,
              timer: 2000
            });
            this.getTeamsAdmin();
          },
          error: (err) => Swal.fire({
            title: err.error.message,
            icon: 'error',
            position: 'center',
            timer: 3000
          })
        })
        this.getUsers();
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

  updateTeam()
  {
    this.teamRest.updateTeam(this.teamUpdate._id, this.teamUpdate).subscribe({

      next: (res:any)=> 
      {
        Swal.fire({
          icon:'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getTeamsAdmin();
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
}
