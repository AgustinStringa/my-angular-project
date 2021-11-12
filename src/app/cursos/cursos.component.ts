import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre_cur:string;
  public apellido_cur:string;
  


  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.nombre_cur = '';
    this.apellido_cur= '';

  }

  ngOnInit(): void {
    
    
      this._route.params.subscribe((params:Params) => {
        console.log(params);
        this.nombre_cur = params['nombre'];
        this.apellido_cur = params['apellido'];
        

        //comprobar que los params no lleguen vacios
        if(this.nombre_cur && this.apellido_cur){
             
        } else {
             
        this._router.navigate(['/home'])

        }

      })
  }

}
