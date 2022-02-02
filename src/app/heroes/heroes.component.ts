import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { ChampionInfo } from '../champion-info';
import { ChampionList } from '../championList';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [];
  
  rotationChampion?: ChampionInfo ;
  championList?: ChampionList;
  
  championName?: string;
  
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  

  ngOnInit(): void {
    this.getHeroes();
    this.getChampionRotation();
    
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  getChampionRotation(): void{
    this.heroService.getChampionRotation()
        .subscribe(rotationChampion => {
        this.rotationChampion = rotationChampion;
        this.getChampionList(this.rotationChampion.freeChampionIdsForNewPlayers, this.rotationChampion.freeChampionIds);
      });   
  }
  getChampionList(idChampionNewPlayer:Number[], idChampion: Number[]): void{
    this.heroService.getChampionList()
      .subscribe(championList => {
        this.championList = championList;
        for (let key of Object.keys(this.championList.data)) {
          let championKey = this.championList.data[key];
          if(idChampionNewPlayer.includes(Number(championKey.key))){
            console.log(championKey.name);
          }
          if(idChampion.includes(Number(championKey.key))){
            console.log(championKey.name);
          }
      }});
    }
}
