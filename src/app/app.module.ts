import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ListaCampeonesComponent } from './lista-campeones/lista-campeones.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyInterceptor } from './http-interceptor';
import { FreeRotationComponent } from './free-rotation/free-rotation.component';

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
