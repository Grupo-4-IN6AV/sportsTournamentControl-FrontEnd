import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  token : any;
  role : any;

  constructor
  (
    private _CargarScripts:CargarScriptsService,
    private userRest : UserRestService
  )
  {
    _CargarScripts.Carga(["home-component"])
  }

  ngOnInit(): void
  {
    this.token = this.userRest.getToken();
    this.role = this.userRest.getIdentity().role;
  }

}