import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:UserModel;


  constructor(
    private userRest: UserRestService,
    private router: Router
  ) { 
    this.user = new UserModel('', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.user);
    this.userRest.login(this.user).subscribe({
      next: (res:any)=>{
        localStorage.setItem('identity', JSON.stringify(res.already));
        localStorage.setItem('token', res.token);
        
        Swal.fire(
          'token' ,
          'Welcome to Soccer Control Tourment!',
          'success'
        )
      },
      error: (err)=> alert(err.error.message || err.error)
    })
  }

}
