import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRestService } from '../userRest/user-rest.service';


@Injectable({
  providedIn: 'root'
})
export class TeamRestService {

  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.userRest.getToken(),
  });

  constructor
  (
    private userRest : UserRestService,
    private http : HttpClient, 
  ){ }

  //ADMINISTRADOR//
  getTeams()
  {
    return this.http.get(environment.baseUrl + 'team/getTeamsAdmin', {headers: this.httpOptions});
  }

  saveTeamAdmin(params:{})
  {
    return this.http.post(environment.baseUrl + 'team/createTeamAdmin', params,{headers: this.httpOptions});
  }

  getTeam(id : string)
  {
    return this.http.get(environment.baseUrl + 'team/getTeam/' + id, {headers : this.httpOptions});
  }

  deleteTeam(id: string)
  {
    return this.http.delete(environment.baseUrl + 'team/deleteTeamAdmin/' + id ,{headers : this.httpOptions});
  }

  updateTeam(id: string, params:{})
  {
    return this.http.put(environment.baseUrl + 'team/updateTeamAdmin/' + id , params, {headers : this.httpOptions});
  }

  //CLIENTE

  getTeamsUser()
  {
    return this.http.get(environment.baseUrl + 'team/getTeamsUser', {headers: this.httpOptions});
  }

  saveTeamUser(params:{})
  {
    return this.http.post(environment.baseUrl + 'team/createTeam', params, {headers: this.httpOptions})
  }

  updateTeamUser(id: string, params:{})
  {
    return this.http.put(environment.baseUrl + 'team/updateTeam/' + id, params, {headers: this.httpOptions})
  }

  deleteTeamUser(id: string)
  {
    return this.http.delete(environment.baseUrl + 'team/deleteTeam/' + id, {headers: this.httpOptions})
  }

  getTeamsUserAdmin(id:string)
  {
    return this.http.get(environment.baseUrl + 'team/getTeamsJourneys/' + id, {headers: this.httpOptions})
  }

}
