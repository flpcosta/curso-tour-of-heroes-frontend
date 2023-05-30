import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Hero } from "../../../core/models/hero.model";
import { HeroService } from "../../../core/services/hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {
  hero!: Hero; // diz que será iniciado depois (poder ser nulo)
  isEditing!: boolean;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    this.getHero();
  }

  getHero(): void{
    const parametro = this.route.snapshot.paramMap.get('id');
    console.log(parametro);

    if (parametro === 'new'){
      this.isEditing = false;
      this.hero = { name: ''} as Hero; // Criando novo Hero
    } else {
      this.isEditing = true;

      const id = Number(parametro);
      this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
    }

  }

  goBack(): void{
    this.location.back();
  }

  create(): void{
    this.heroService.create(this.hero).subscribe(() => this.goBack());
  }

  update(): void{
    this.heroService.update(this.hero).subscribe(() => this.goBack());
  }

  isFormValid(): boolean{
    return !!this.hero.name.trim();
  }

}
