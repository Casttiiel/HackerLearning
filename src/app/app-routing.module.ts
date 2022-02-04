import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroTableComponent } from './hero-table/hero-table.component';
import { DNIComponent } from './dni/dni.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },// path por defecto que nos redirige a dashboard
  { path: 'home', component: HeroesComponent },//cuando el path lleve a home, dará al component : heroescomponent.
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'stats', component: HeroTableComponent },
  { path: 'calculadoraDNI', component: DNIComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }