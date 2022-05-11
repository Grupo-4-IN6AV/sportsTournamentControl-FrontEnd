import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserAdminService } from 'src/app/services/userRest/user-admin.service';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})

export class UserAdminComponent implements OnInit {

  users: any;
  user: UserModel;
  searchUser: any;
  userView: any;

  constructor
    (
      private userRest: UserAdminService,
      private _CargarScripts: CargarScriptsService,

  ) {
    this.user = new UserModel('', '', '', '', '', '', '', '');
    _CargarScripts.Carga(["script"]);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userRest.getUsers().subscribe({
      next: (res: any) => this.users = res.user,
      error: (err) => console.log(err)
    })
  }

  saveUser(addUserForm: any) {
    this.userRest.saveUser(this.user).subscribe
      ({
        next: (res: any) => {
          Swal.fire
            ({
              icon: 'success',
              title: res.message,
              confirmButtonColor: '#28B463'
            });
          this.getUsers();
          addUserForm.reset();
        },
        error: (err: any) => {
          Swal.fire({
            icon: 'error',
            title: err.error.message || err.error,
            confirmButtonColor: '#E74C3C'
          });
        },
      })
  }

  getUser(id: string) {
    this.userRest.getUser(id).subscribe({
      next: (res: any) => {
        this.userView = res.user;
      },
      error: (err) => alert(err.error.message)
    })
  }

  deleteUser(id: string) 
  {

    Swal.fire({
      title: 'Do you want to delete this User?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.userRest.deleteUser(id).subscribe({
          next: (res: any) => {
            Swal.fire({
              title: res.message + ' ' + res.userDeleted.name,
              icon: 'success',
              position: 'center',
              showConfirmButton: false,
              timer: 2000
            });
            this.getUsers();
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
        Swal.fire('User Not Deleted', '', 'info')
      }
    })
  }

}
