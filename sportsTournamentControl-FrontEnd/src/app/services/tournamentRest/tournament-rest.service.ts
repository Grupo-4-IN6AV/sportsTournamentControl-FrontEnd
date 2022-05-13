import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRestService } from '../userRest/user-rest.service';


@Injectable({
  providedIn: 'root'
})
export class TournamentRestService 
{

  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.userRest.getToken(),
  });

  constructor
  (
    private userRest : UserRestService,
    private http : HttpClient, 
  ){ }

  
  //CLIENTE
  getTournamentsUser()
  {
    return this.http.get(environment.baseUrl + 'tournament/getTournamentsUser', {headers: this.httpOptions});
  }

  getTournament(id : string)
  {
    return this.http.get(environment.baseUrl + 'tournament/getTournament/' + id, {headers : this.httpOptions});
  }

  saveTournamentUser(params:{})
  {
    return this.http.post(environment.baseUrl + 'tournament/createTournament', params,{headers: this.httpOptions});
  }

  updateTournament(id : string, params:{})
  {
    return this.http.put(environment.baseUrl + 'tournament/updateTournament/' + id , params, {headers: this.httpOptions});
  }

  deleteTournament(id : string)
  {
    return this.http.delete(environment.baseUrl + 'tournament/deleteTournament/' + id , {headers: this.httpOptions});
  }

}
