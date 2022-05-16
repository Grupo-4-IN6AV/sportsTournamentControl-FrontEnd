import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
@Component({
  selector: 'landingPage',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor
  (
    private _CargarScripts:CargarScriptsService,
  ) 
  {
    _CargarScripts.Carga(["main"])
  }

  ngOnInit(): void {
  }

}
