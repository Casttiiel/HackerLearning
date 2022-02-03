import { LocationStrategy } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { DNI } from '../dni';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})
export class HeroTableComponent implements OnInit {

  
  constructor(private heroService: HeroService) { }

  oroBuscado: number=0;
  oroBuscadoMin: number=0;
  oroBuscadoMax: number=0;
  heroes?: Hero[];
  heromaxgold?: Hero;
  minHeroGold?: Hero;
  campeonEntreMedio: Hero[] = [];
  listaZeri: Hero[] = [];
  primerCampeonEncontrado?: Hero;
  mediaOro: number =0;
  numerosDNI: number = 0;
  DNI?: DNI;

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(data => {
      this.heroes = data;
      this.top5gold(data); //Lo añadimos aqui para que nos ejecute la funcion despues de recibir los datos de los heroes. Si lo ponemos fuera lo haria a la vez y no funcionaria.
      this.mediaOroHeroes(data);
      this.menosGoldHero(data);
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
  mediaOroHeroes(lista: Hero[]): void {
    for (var id=0;id<lista.length;id++){
      this.mediaOro=lista[id].gold + this.mediaOro;
    }
    this.mediaOro = Number((this.mediaOro / lista.length));
  }
  menosGoldHero (lista:Hero[]): void{
    var menosGold = Infinity;
    for(var id=0;id<lista.length;id++){
      if(lista[id].gold < menosGold){
        this.minHeroGold= lista[id];
        menosGold = lista[id].gold;
      }
    }
  }

  buscarCampeonOro (lista:Hero[]):void{
    for (var id=0; id < lista.length;id++){
      if (this.oroBuscado < lista[id].gold){
        this.primerCampeonEncontrado = lista[id];
        id= Infinity;
      }
    }
  }
  onOroChange(oroBuscado: number) {
    this.oroBuscado = oroBuscado;
    console.log(oroBuscado);  
  }

  buscarCampeonOroMedio (lista:Hero[]):void{
    for (var id=0; id < lista.length;id++){
      if (this.oroBuscadoMin < lista[id].gold && this.oroBuscadoMax > lista[id].gold){
        this.campeonEntreMedio.push(lista[id]);
      }
    }
  }
  onOroChangeMin(oroBuscadoMin: number) {
    this.oroBuscadoMin = oroBuscadoMin;
    console.log(oroBuscadoMin);  
  }
  onOroChangeMax(oroBuscadoMax: number) {
    this.oroBuscadoMax = oroBuscadoMax;
    console.log(oroBuscadoMax);  
  }
  letZeri(listaZeris:Hero[]):void{
    var idZeri = listaZeris.filter(id => id.name =="Zeri");
    console.log(idZeri);
    for (var id=0; id < listaZeris.length;id++){
      this.listaZeri.push(listaZeris[0]);
    }
  }
  onNumeroChange(numerosDNI: number) {
    this.numerosDNI = numerosDNI;
    console.log(numerosDNI);  
  }
  calcularDNI():void{
    var resto = (this.numerosDNI/23);
    var letras: string[];
    letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
    //this.DNI.numeros = this.numerosDNI;
    //this.DNI.letra = letras[resto];
  }
}
