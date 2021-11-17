import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public nombre_cur:String;
  public apellido_cur:String;
  public fecha:Date;
  public currency:any;

  constructor(
    
    private _router: Router
  ) { 
    this.nombre_cur = '';
    this.apellido_cur = '';
    this.fecha = new Date();
    this.currency = 180;

  }

  ngOnInit(): void {
  }



  redireccionar(){
    var input_cur = <HTMLInputElement>(document.querySelector('#nombre_cur'));
    this.nombre_cur = input_cur.value;
    var input_apellido_cur = <HTMLInputElement>(document.querySelector('#apellido_cur'));
    this.apellido_cur = input_apellido_cur.value;


    this._router.navigate(['/cursos', this.nombre_cur, this.apellido_cur])
  }
  

}
