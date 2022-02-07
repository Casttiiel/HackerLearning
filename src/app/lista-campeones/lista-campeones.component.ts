import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LolAPIService } from '../lolapi.service';
import { LolChampions } from '../lol-champions';

@Component({
  selector: 'app-lista-campeones',
  templateUrl: './lista-campeones.component.html',
  styleUrls: ['./lista-campeones.component.css']
})
export class ListaCampeonesComponent implements OnInit {

  constructor(private lolApiService: LolAPIService) { }
  lolchampions: LolChampions[]=[];

  ngOnInit(): void {
    this.lolApiService.getChampions().subscribe(data =>{
     this.lolchampions= data; 
    });

  }

  
}
