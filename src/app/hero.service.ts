import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
 
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './messages.service';
 
@Injectable()
export class HeroService {
 
  constructor(private messageService: MessageService) { }
 
  getHeroes(): void {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}