import { Component, OnInit } from "@angular/core";
import { HeroService } from "../hero.service";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Hero } from "../hero.model";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {
  hero!: Hero; // diz que será iniciado depois (poder ser nulo)

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    this.getHero();
  }

  getHero(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);

    this.heroService.getHero(id).subscribe( hero => (this.hero = hero))
  }

    goBack(): void{
      this.location.back();
    }

}
