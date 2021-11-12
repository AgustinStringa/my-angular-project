import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public nombre_cur:String;

  constructor(
    
    private _router: Router
  ) { 
    this.nombre_cur = '';
  }

  ngOnInit(): void {
  }

  almacenar_valor(){
    var input_cur = <HTMLInputElement>(document.querySelector('#nombre_cur'));
    this.nombre_cur = input_cur.value;
    console.log(this.nombre_cur);
  }

  redireccionar(){
    this._router.navigate(['/cursos', this.nombre_cur, 'ariosti'])
  }
  

}
