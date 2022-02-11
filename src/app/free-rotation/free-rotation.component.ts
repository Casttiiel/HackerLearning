import { Component, OnInit } from '@angular/core';
import { LolAPIService } from '../lolapi.service';
import { ChampionData } from '../champion-data';

@Component({
  selector: 'app-free-rotation',
  templateUrl: './free-rotation.component.html',
  styleUrls: ['./free-rotation.component.css']
})
export class FreeRotationComponent implements OnInit {

  constructor(private lolApiService: LolAPIService) { }

  data:ChampionData[]=[];
  key:String="";
  finalChampions:ChampionData[]=[];
  lowFinalChampions:ChampionData[]=[];

  ngOnInit(): void {
    this.lolApiService.clearData();
    
    this.lolApiService.getChampions().subscribe(datos=>{
      //PILLAMOS LA STRING DONDE ESTA GUARDADO EL ID DEL CAMPEON PARA COMPARARLO CON EL NUMERO DE ID DE LOS CAMPEONES GRATUITOS.
      this.data=Object.values(datos.data);

      this.lolApiService.getChampionRotation().subscribe(datos2=>{
       

        for(var i=0;i<this.data.length;i++){
          
          this.key=this.data[i].key;
          
          for(var j=0;j<Object.values(datos2.freeChampionIds).length;j++){
            
            if(Number(this.key)===Object.values(datos2.freeChampionIds)[j]){
              
              this.finalChampions.push(this.data[i]);
            }
          }
          for(var k=0;k<Object.values(datos2.freeChampionIdsForNewPlayers).length;k++){
            if(Number(this.key)===Object.values(datos2.freeChampionIdsForNewPlayers)[k]){
              
              this.lowFinalChampions.push(this.data[i]);
            }
          }  
        }
      })  
    })
  }
}
