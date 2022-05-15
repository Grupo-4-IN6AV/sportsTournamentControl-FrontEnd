import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRestService } from '../userRest/user-rest.service';
import { retry } from 'rxjs';


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

  addTeamTournament(id : string, params:{})
  {
    console.log(params);
    return this.http.post(environment.baseUrl + 'tournament/addTeamTournament/' +id, params,{headers: this.httpOptions});
  }

  tableTournament(id : string)
  {
    return this.http.get(environment.baseUrl + 'tournament/tableTournament/' + id , {headers: this.httpOptions});
  }

  getJourney(id:string)
  {
    return this.http.get(environment.baseUrl + 'journey/getJourney/' + id, {headers:this.httpOptions});
  }

  addMatchTournament(id:string, params:{})
  {
    return this.http.post(environment.baseUrl + 'journey/addMatch/' +id, params, {headers:this.httpOptions});
  }

  getJourneyTournaments(id: string)
  {
    return this.http.get(environment.baseUrl + 'journey/getJourneys/' + id, {headers: this.httpOptions});
  }

  getMatchesJourney(params:{})
  {
    return this.http.post(environment.baseUrl + 'journey/getMatches', params, {headers: this.httpOptions});
  }

}
