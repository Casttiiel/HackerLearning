import { Component } from '@angular/core';
import { LolAPIService } from './services/lolapi.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-apadp';

  constructor(private lolAPI: LolAPIService){}

  ngOnInit() {
    this.lolAPI.clearData();
    this.lolAPI.getChampionRotation().subscribe(data => {
      //Hago mis cosas
      
    })
  }
}
