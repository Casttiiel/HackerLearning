import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChampionInfo } from './champion-info';
import { ChampionList } from './championList';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  private championRotationUrl='https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-597f6eb9-4d4f-44bf-bd8f-98d7ce6d48fd';
  private championListUrl='http://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion.json';

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getChampionRotation(): Observable<ChampionInfo>{
    return this.http.get<ChampionInfo>(this.championRotationUrl);
  }

  getChampionList (): Observable<ChampionList>{
    return this.http.get<ChampionList>(this.championListUrl);
  }


  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
