import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTeamPipe'
})
export class SearchTeamPipe implements PipeTransform 
{

  transform(teams:any, search:any){
    if(search == undefined){
      return teams;
    }else{
      return teams.filter( (team:any) => {
        return team.name.toLowerCase().includes(search.toLowerCase());
      })
    }
  }
}
