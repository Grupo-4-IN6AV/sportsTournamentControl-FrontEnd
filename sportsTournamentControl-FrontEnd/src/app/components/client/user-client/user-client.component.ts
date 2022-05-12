import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';
import { UserAdminService } from 'src/app/services/userRest/user-admin.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-client',
  templateUrl: './user-client.component.html',
  styleUrls: ['./user-client.component.css']
})

export class UserClientComponent implements OnInit {

  users: any;
  user: UserModel;
  _id: any;
  userUpdate: any

  constructor
    (
      private userRest : UserRestService,
      private userAdminRest : UserAdminService
    ) 
  {
    this.user = new UserModel('', '', '', '', '', '', '', '');
  }

  ngOnInit(): void 
  {
    this.getUser()
  }

  updateUser()
  {
    this.userUpdate.password = undefined;
    this.userUpdate.role = undefined;
    this.userAdminRest.updateAccount(this.userUpdate._id, this.userUpdate).subscribe({
      next: (res:any)=> 
      {
        Swal.fire({
          icon:'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getUser();
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

  getUser()
  {
    this.userAdminRest.getUser(this.userRest.getIdentity()._id).subscribe({
      next: (res: any) => {
        this.userUpdate = res.user;
      },
      error: (err) => {alert(err.error.message)}
    })
  }


}
