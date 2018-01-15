import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: any[];
  constructor(private heroService: HeroService, private route: ActivatedRoute) { 
  }
  

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero): void {
    this.selectedHero = hero
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
      let id = +this.route.snapshot.paramMap.get('id');
      if (id) {
      this.selectedHero = this.heroes.find(hero => hero.id === id);
      }
    
    });
  }

  getHero(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.heroService.getHero(id)
        .subscribe(hero => this.selectedHero = hero);
    }

  addHero(name): void {
    if (name) {
       this.heroService.addHero(name).subscribe((hero) => {
         this.heroes.push(hero);
         console.log(this.heroes)
         console.log(hero)
       });
       
    }
  }
}
