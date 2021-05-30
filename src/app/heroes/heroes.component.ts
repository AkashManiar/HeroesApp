import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { MessagesService } from "../messages.service"

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessagesService) { 
    console.log('Heroes Component');
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeros().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) return

    // here we have done is type insertion, where we are telling { name } is of type Hero
    this.heroService.addHero({ name } as Hero).subscribe(
      hero => {
        this.heroes.push(hero)
      })
  }

  delete(hero: Hero, index: number): void {
    this.heroes.splice(index, 1);
    this.heroService.deleteHero(hero.id).subscribe()
  }
}
