import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChampionRotation } from './ChampionRotation';
import { SummonerData } from './SummonerData';

@Injectable({
  providedIn: 'root'
})
export class LolAPIService {

  constructor(private http: HttpClient) { }

  server: string = "https://euw1.api.riotgames.com";
  key: string = "";

  //TODO Moverlo a un servicio helper
  getData(url: string, sessionStorageKey?: string) :Observable<any> {
    //si tengo en el session storage los datos, la devuelvo, sino, hago la llamada a la API y la devuelvo
    if(sessionStorageKey && sessionStorage.getItem(sessionStorageKey)){
      return of(JSON.parse(sessionStorage.getItem(sessionStorageKey) || ""));
    }else{
      return this.http.get<any>(url).pipe(
        tap(data => { // Esto es otro subscribe
          if(sessionStorageKey){
            sessionStorage.setItem(sessionStorageKey, JSON.stringify(data));
          }
        })
      );
    }
  }

  getChampionRotation(): Observable<ChampionRotation>{
    return this.getData(this.server + "/lol/platform/v3/champion-rotations", "championRotation");
  }

  getUserData(userName: string): Observable<SummonerData>{
    return this.getData(this.server + "/lol/summoner/v4/summoners/by-name/"+ userName);
  }

}