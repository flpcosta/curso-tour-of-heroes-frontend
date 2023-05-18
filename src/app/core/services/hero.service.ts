import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService : MessageService){}

  // Doc: https://rxjs.dev/guide/observable

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES); // Transforma o mock em um observável
    this.messageService.add('HeroService: fetched heroes');

    return heroes;
    //return throwError(new Error('ocorreu um problema!!'));
  }

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find((hero) => hero.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`); // Entre crase é uma string processada.

    return of(hero);
  }
}