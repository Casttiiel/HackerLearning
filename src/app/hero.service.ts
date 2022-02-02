import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { ChampionInfo } from './champion-info';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { fullChampion } from './full-champion';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService,private http:HttpClient) { }

  private heroesUrl = 'https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-e0b06fd3-d93b-4e87-bdde-f014ad2f30b1';
  private totalchampion = "http://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion.json";

  getRotation(): Observable<ChampionInfo> {
    return this.http.get<ChampionInfo>(this.heroesUrl);
  }
  
  getIdChampion(): void{
    this.getRotation().subscribe(champion =>{
      var id = champion.freeChampionIds;// guardamos los id

      this.http.get<fullChampion>("http://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion.json").subscribe(championList =>{
        for (var i=0;i<id.length;i++){
          

          for (let key of Object.keys(championList.data)) {

            let keyid = championList.data[key];
            
            if(id[i]==Number(keyid.key)){ //mostrar nombre campeon
              var nombreCampeon = key;
              
              
             
            }
            
          }
          
        }});
       // si el freechampion ID = .key de los campeones del json -> return los campeones
        

    })



  }
  /*getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }*/
}
