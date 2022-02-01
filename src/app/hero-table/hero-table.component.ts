import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})
export class HeroTableComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes?: Hero[];

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(data => this.heroes = data);
    
  }

}
