import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ChampionInfo } from '../champion-info';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})
export class HeroTableComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  champion?: ChampionInfo;
  heromaxgold?: Hero;

  ngOnInit(): void {
    this.heroService.getIdChampion();
    
  }

 
  top5gold(lista:Hero[]): void{
  var maxGold=0;
    for(var id=0;id<lista.length;id++){
        
        if(lista[id].gold>maxGold){

          this.heromaxgold= lista[id];
          maxGold= lista[id].gold;
        }
    }
  }
}
