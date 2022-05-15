import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserRestService } from '../userRest/user-rest.service';

@Injectable({
  providedIn: 'root'
})
export class JourneyRestService 
{

  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.userRest.getToken(),
  });

  constructor(
    private userRest : UserRestService,
    private http: HttpClient
  ) { }

  getJourneysTornament(id:string)
  {
    return this.http.get(environment.baseUrl + 'journey/getJourneys/' + id,{headers: this.httpOptions});
  }
}
