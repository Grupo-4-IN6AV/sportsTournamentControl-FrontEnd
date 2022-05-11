import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-teams-admin',
  templateUrl: './teams-admin.component.html',
  styleUrls: ['./teams-admin.component.css']
})
export class TeamsAdminComponent implements OnInit {

  constructor
  (
    private _CargarScripts:CargarScriptsService,
  ) { }

  ngOnInit(): void {
  }

}
