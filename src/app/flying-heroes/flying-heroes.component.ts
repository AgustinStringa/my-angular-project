import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styleUrls: ['./flying-heroes.component.css']
})
export class FlyingHeroesComponent implements OnInit {

  heroes: any[] = [];
  canFly = true;
  constructor() { this.reset();
  this.heroes = [{name:'no volador', canFly: false},{name:'learn to fly', canFly: true}]
  }

  ngOnInit(): void {
      
  }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    const hero = {name, canFly: this.canFly};
    this.heroes.push(hero);
    //console.log(this.heroes);
  }

  reset() { this.heroes = []; }

}
