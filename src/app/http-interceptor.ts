import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LolAPIService } from './lolapi.service';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

    constructor(private lolapi: LolAPIService){}

    intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {   

      if(req.url.indexOf("ddragon.leagueoflegends") !== -1){
        return next.handle(req);  
      }

      var newUrl = req.url + ((req.url.indexOf('?') !== -1) ? "&" : "?") + "api_key="+this.lolapi.key;
      
      const httpReq = req.clone({
        url: newUrl
      });

      return next.handle(httpReq);
    }
}