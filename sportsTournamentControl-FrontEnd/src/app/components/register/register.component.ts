import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:UserModel;
  repeatPass: string="";
  timer: any;
  constructor(
    private userRest: UserRestService,
    private router: Router
  ) { 
    this.user = new UserModel('','','','','','','','');
    
  }

  

  ngOnInit(): void {
  }
  async checkPassword(){
       clearTimeout(this.timer);
    this.timer = await setTimeout(()=>{

      
    if(this.repeatPass != this.user.password){
      alert('no coinciden las contraseñas ');
      clearTimeout(this.timer);
   }else{
     alert('password correcta  ');
     clearTimeout(this.timer);
   }

    }, 1500)

    
  }
  register(){
    this.userRest.register(this.user).subscribe({
      next: (response:any)=>{alert(response.message + '  You can login now');
        this.router.navigateByUrl('/login');
      },
      error: (err)=> alert(err.error.message || err.error)
    })
    
  }


  

}