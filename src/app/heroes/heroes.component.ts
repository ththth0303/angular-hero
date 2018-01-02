import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  onSelect(hero): void {
    this.selectedHero = hero
    console.log(this.selectedHero);
  }
  this.heroes =  this.HeroService.getHeroes();
  selectedHero: Hero;
}
