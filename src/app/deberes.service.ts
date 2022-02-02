import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { NgIf } from '@angular/common';

@Injectable({
    providedIn: 'root'
  })

  export class Deberes {

    constructor() { }

    heroes?: Hero[];

    mediaOro(heroes:Hero[]): Number{
        var oroTotal = 0;
            for(var i=0;i<heroes.length;i++){

                oroTotal= oroTotal+ heroes[i].gold;
            }
        
        var media = oroTotal/heroes.length;
        return media;
        //habiendo pillado todos los heroes, quiero que me sume el .gold de cada uno y dividirlo por heroes.length
    }

    oroMinimo(heroes:Hero[]): Hero{
        //habiendo pillado la lista de heroes, quiero que la funcion itere todos los .gold de los heroes, y reemplace cada vez que encuentre un .gold mas pequeño
        var oroMinimo= Infinity;
        var heroMinGold = heroes[0]; 
        
        //Incluimos esta variable para guardar el valor del heroe con el valor minimo de Oro. lo inicio con el valor del primer elemento de la array pero da igual el elemento escogido ya que se sustituira con la primera iteracion del bucle
        // porque  cualquier valor sera mas pequeño que infinito. 
        
        for(var j=0;j<heroes.length;j++){
                
                
            if(heroes[j].gold<oroMinimo){
                    oroMinimo= heroes[j].gold;
                    heroMinGold= heroes[j];
                     
            }
                
        }

        return heroMinGold;  
    }

    oroMayorQue(valor :Number,heroes:Hero[]): Hero{//A MEDIO HACER. NO TOCAR 

        
        var Tomatoe:Hero ={id:404,name:"error", gold:-Infinity,winrate:0};

        var i=0;

       do{

        if(heroes[i].gold>valor){
            var Tomatoe = heroes[i]
            
        }

        i++;
       }while(Tomatoe.gold>valor || i<heroes.length );

       return Tomatoe;
    }

    oroComprendido(minimo:Number,maximo:Number,heroes:Hero[]){}

  }