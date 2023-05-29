import { Injectable } from '@angular/core';
import { Observable, finalize, of, tap } from 'rxjs';
import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroments';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = `${enviroment.baseUrl}/heroes`; //'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService : MessageService,
    private loadingService: LoadingService
  ) {}

  // Doc: https://rxjs.dev/guide/observable

  // GET /heroes
  // Sobre o pipe e tap: https://rxjs.dev/guide/operators
  getHeroes(): Observable<Hero[]>{
    this.loadingService.show();
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(
        tap((heroes) => this.log(`fetched ${heroes.length} hero(es)`)),
        finalize(() => this.loadingService.hide())
      );
  }

  // GET /heroes/id
  getHero(id: number): Observable<Hero>{
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`).pipe(
      tap((hero) => this.log(`fetched hero id=${id} and name =${hero.name}`))
    );
  }

  private log(message: string): void{
    this.messageService.add(`HeroService: ${message}`)
  }
}
