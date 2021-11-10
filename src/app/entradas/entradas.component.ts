import { Component, OnInit } from '@angular/core';
import { Entrada } from '../models/entrada_blog';

@Component({
  selector: 'entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  public entradas: Array<Entrada>;
  public nueva_propiedad:any;
  public nueva_entrada:Entrada;

  constructor() {
    this.nueva_entrada = new Entrada('','','','',0,'');
    //valor inicial para propiedad de two way data binding
    this.nueva_propiedad = 'hello there'
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

  getNuevaPropiedad(){
    console.log(this.nueva_propiedad);
  }

  //agregar 
  agregarEntrada(){
    let {titulo, contenido, fecha, autor, cant_comments, src_img} = this.nueva_entrada
    if(Boolean(titulo) && Boolean(contenido) && Boolean(fecha) && Boolean(autor) && Boolean(cant_comments) && Boolean(src_img)){
      this.entradas.push(new Entrada(titulo, contenido, fecha, autor, cant_comments, src_img))
      this.nueva_entrada = new Entrada('','','','',0,'');
    } 
  }

  //eliminar
  eliminarEntrada(index:number){
    this.entradas.splice(index, 1);
    //this.entradas[index] = new Entrada('','','','',0,'');
  }

}
