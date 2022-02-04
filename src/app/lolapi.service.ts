import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ChampionRotation } from './ChampionRotation';

@Injectable({
  providedIn: 'root'
})
export class LolAPIService {

  constructor(private http: HttpClient) { }

  server: string = "https://euw1.api.riotgames.com";
  key: string = "RGAPI-54533add-3fe7-4e89-b103-cb4ac5a8192d";

  //TODO Moverlo a un servicio helper
  getData(url: string, sessionStorageKey: string) :Observable<any> {
    //si tengo en el session storage los datos, la devuelvo, sino, hago la llamada a la API y la devuelvo
    if(sessionStorage.getItem(sessionStorageKey)){
      return of(JSON.parse(sessionStorage.getItem(sessionStorageKey) || ""));
    }else{
      return this.http.get<any>(url).pipe(
        tap(data => { // Esto es otro subscribe
          sessionStorage.setItem(sessionStorageKey, JSON.stringify(data));
        })
      );
    }
  }

  getChampionRotation(): Observable<ChampionRotation>{
    return this.getData(this.server + "/lol/platform/v3/champion-rotations", "championRotation");
  }

}