import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService }  from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private route1: Router,
        private heroService: HeroService,
        private location: Location) { }

    ngOnInit() {
       this.getHero();
       var edit: boolean = false;
    }
    
    @Input() hero: Hero;
    @Input() heroName: string;



    getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
        .subscribe(hero => {this.hero = hero; this.hero ? this.heroName = this.hero.name : '' });
    }

    goBack(): void {
        this.location.back();
    }

    delete(id): void {
         this.heroService.deleteHero(id).subscribe((data) => {
           if (data.status === 'ok') {
             this.route1.navigate(['/dashboard'])
           }
         });
    }


    save(hero): void {

      if (hero.name) {
          console.log(hero);
          this.heroService.saveHero(hero).subscribe(() => this.edit = false)
          });
      }
    }
}
