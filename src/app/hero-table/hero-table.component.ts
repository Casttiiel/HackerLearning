import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})
export class HeroTableComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes?: Hero[];
  heromaxgold?: Hero;

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(data => {
      this.heroes = data;
      this.top5gold(data); //Lo añadimos aqui para que nos ejecute la funcion despues de recibir los datos de los heroes. Si lo ponemos fuera lo haria a la vez y no funcionaria.
    });
    
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
