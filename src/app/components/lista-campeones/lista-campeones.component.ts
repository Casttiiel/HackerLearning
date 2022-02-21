import { Component, OnInit } from '@angular/core';
import { LolAPIService } from '../../services/lolapi.service';
import { ChampionData } from '../../interfaces/champion-data';

@Component({
  selector: 'app-lista-campeones',
  templateUrl: './lista-campeones.component.html',
  styleUrls: ['./lista-campeones.component.css']
})
export class ListaCampeonesComponent implements OnInit {

  constructor(private lolApiService: LolAPIService) { }
  datos:ChampionData[]= [];

  ngOnInit(): void { 
    this.lolApiService.getChampions().subscribe(data =>{
      this.datos= Object.values(data.data);
    });

  }

  
}
