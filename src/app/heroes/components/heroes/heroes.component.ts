import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{
  public displayedColumns: string[] = ['id', 'name'];
  heroes: Hero[] = [];

  constructor(
    public heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    // Inscreve no Observer
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

}
