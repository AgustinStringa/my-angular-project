import { Component, OnInit } from '@angular/core';
import {config_menu} from '../models/config_menu';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public title:string;
  public enlaces:Array<string>;
  //public background_color:string;
  public a_color:string;

  constructor() { 
    this.title = config_menu.title;
    this.enlaces = config_menu.enlaces;
    //this.background_color = config_menu.background_color;
    this.a_color = config_menu.a_color;
  }

  ngOnInit(): void {
    let menu = <HTMLElement>document.querySelector('.menu');


  }

}
