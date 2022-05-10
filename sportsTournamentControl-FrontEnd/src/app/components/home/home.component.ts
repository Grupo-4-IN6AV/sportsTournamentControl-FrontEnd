import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _CargarScripts:CargarScriptsService)
  {
    _CargarScripts.Carga(["home-component"])
  }

  ngOnInit(): void {
  }

}