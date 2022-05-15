import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit 
{
  user:UserModel;
  confirmPassword : string = '';
  timer : any;
  constructor
  (
    private userRest : UserRestService,
    private router : Router
  )
  {
    this.user = new UserModel
    (
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'CLIENT',   
    );
  }

  ngOnInit(): void {
  }

  async checkPassword()
  {
    clearTimeout(this.timer);
    this.timer = await setTimeout(()=>
    {
      if(this.user.password != '')
      {
        if (this.confirmPassword != this.user.password) 
        {
          Swal.fire({
            icon:'error',
            title: 'Password do not Match',
            html:'Try Again',
            confirmButtonColor: '#E74C3C'
          })
        }
        else 
        {
          Swal.fire({
            icon:'success',
            title: 'Passwords Match',
            confirmButtonColor: '#28B463'
          })
        }
      }
      else
      {
        Swal.fire({
          icon:'info',
          title: 'Set value in input Password',
          confirmButtonColor: '#0D6EFD'
        })
      }
    }, 800);
  }

  register()
  {
    //console.log(this.user);
    //let message : string = 'Mensaje desde el componente pero enviado desde el servicio'
    //this.userRest.test(message);
    //this.userRest.testHttp().subscribe((response:any)=>{alert(response.message)});
    /*this.userRest.testHttp().subscribe
    ({
      next : (response : any) => {alert(response.message)},
      error: (error) => {console.log(error)}
    })*/
    this.userRest.register(this.user).subscribe
    ({
      
      next : (res : any) => 
      {
        Swal.fire({
          title: res.message,
          html:'Already can Login now.',
          confirmButtonColor: '#28B463'
        })
        this.router.navigateByUrl('/login')
      },
      error: (err: any) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    });
  }

}