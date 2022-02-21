import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { MyInterceptor } from '../http-interceptor';
import { FreeRotationComponent } from '../components/free-rotation/free-rotation.component';
import { ListaCampeonesComponent } from '../components/lista-campeones/lista-campeones.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaCampeonesComponent,
    FreeRotationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
