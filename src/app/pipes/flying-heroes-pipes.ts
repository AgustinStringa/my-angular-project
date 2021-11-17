import { Pipe, PipeTransform } from '@angular/core';



@Pipe({ name: 'flyingHeroes', pure:false })
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: any[]) {
    console.log(allHeroes);      
    return allHeroes.filter(hero => hero.canFly);
  }
}