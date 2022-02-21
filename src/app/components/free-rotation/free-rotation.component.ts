import { Component, OnInit } from '@angular/core';
import { LolAPIService } from '../../services/lolapi.service';
import { ChampionData } from '../../interfaces/champion-data';

@Component({
  selector: 'app-free-rotation',
  templateUrl: './free-rotation.component.html',
  styleUrls: ['./free-rotation.component.css']
})
export class FreeRotationComponent implements OnInit {

  constructor(private lolApiService: LolAPIService) { }

  finalChampions : ChampionData[] = [];
  lowFinalChampions : ChampionData[] = [];

  ngOnInit(): void {
    this.lolApiService.clearData();
    
    this.lolApiService.getChampions().subscribe(datos=>{
      var data : ChampionData[] = Object.values(datos.data);

      this.lolApiService.getChampionRotation().subscribe(datos2 => {
        var key : String = "";
        for(var i = 0; i < data.length; i++){
          key = data[i].key;
          for(var j=0; j < Object.values(datos2.freeChampionIds).length; j++){
            if(Number(key) === Object.values(datos2.freeChampionIds)[j]){
              this.finalChampions.push(data[i]);
            }
          }
          for(var k = 0; k < Object.values(datos2.freeChampionIdsForNewPlayers).length; k++){
            if(Number(key) === Object.values(datos2.freeChampionIdsForNewPlayers)[k]){
              this.lowFinalChampions.push(data[i]);
            }
          }
        }
      });
    });


  }
}
