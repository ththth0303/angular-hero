import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
 
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './messages.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {
 
    constructor(
        private http: HttpClient,
        private messageService: MessageService
        ) { }
 
    getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
     let heroes =  this.http.get<Hero[]>(this.heroesUrl);
     return heroes;
       
    }

    getHero(id: number): Observable<Hero> {
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        let heroes =  this.http.get<Hero[]>(this.Url + 'hero/' + id);
        return heroes;
    }

    private log(message: string) {
       this.messageService.add('HeroService: ' + message);
    }

    addHero(name: string): Observable<Hero[]> {

       // Todo: send the message _after_ fetching the heroes
     let heroes =  this.http.post<Hero[]>(this.heroesUrl, {"name": name});
     return heroes;
       
    }

    saveHero(hero): void {
        console.log(hero);
        console.log(httpOptions)
        let heroes =  this.http.put<Hero[]>(this.heroesUrl, hero, httpOptions);
        return heroes;
       
    }

    private heroesUrl = 'http://localhost:6969/heroes';

    private Url = 'http://localhost:6969/'; 
}