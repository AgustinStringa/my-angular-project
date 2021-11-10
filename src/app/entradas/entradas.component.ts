import { Component, OnInit } from '@angular/core';
import { Entrada } from '../models/entrada_blog';

@Component({
  selector: 'entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  public entradas: Array<Entrada>;

  constructor() {
    this.entradas = [
      new Entrada('primera entrada de blog',
      'kajsdbkajsbdjaksbdjkasbd','9-11-2021','Agustin Stringa',27,
      'https://images8.alphacoders.com/522/thumb-1920-522662.jpg'),
      new Entrada('titulo',
      'un poco de lorem ipsum no vendria mal','10-11-2021','Agustin Stringa',69,
      'https://images5.alphacoders.com/302/thumb-1920-302577.jpg'),
      
    ]
   }

  ngOnInit(): void {
    console.log(this.entradas);
  }

}
