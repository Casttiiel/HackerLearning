import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeRotationComponent } from '../components/free-rotation/free-rotation.component';
import { HomeComponent } from '../components/home/home.component';
import { ListaCampeonesComponent } from '../components/lista-campeones/lista-campeones.component';

const routes: Routes = [
  { component:ListaCampeonesComponent ,path:"Champions"},
  { component:FreeRotationComponent ,path:"FreeRotation"},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { component:HomeComponent,path:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
