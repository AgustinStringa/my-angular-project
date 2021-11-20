import { Component, OnInit } from '@angular/core';
import { ShowService } from '../services/show.service';
import { Router } from '@angular/router';



@Component({
  selector: 'shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
  providers: [ShowService]
})
export class ShowsComponent implements OnInit {
public shows:any;
public cargando:boolean;
  constructor(
    private _showService: ShowService,
    private _router: Router

    
  ) { 
    this.cargando = false;
  }

  ngOnInit(): void {
    
  }

  cargarShows(){
    this.cargando = true;
    setTimeout(() => {
      this._showService.getShows().subscribe(
      result => {
        this.shows = result;
        this.cargando = false;
        console.log(this.shows);
      })
    }, 1000)

    
  }

  toEpisodeList(id:number, name:string){
    //IMPORTANTE SINTAXIS PARA PASAR PARAMETROS INTERCALADOS
    this._router.navigate(['/shows', name, 'episodios', id])
  }

}
