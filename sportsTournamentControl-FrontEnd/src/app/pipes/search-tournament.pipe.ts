import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTournamentPipe'
})
export class SearchTournamentPipe implements PipeTransform 
{

  transform(tournaments:any, search:any){
    if(search == undefined){
      return tournaments;
    }else{
      return tournaments.filter( (tournament:any) => {
        return tournament.name.toLowerCase().includes(search.toLowerCase());
      })
    }
  }
}