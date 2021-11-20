import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ShowService } from '../services/show.service';




@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css'],
  providers: [ShowService]

})
export class EpisodiosComponent implements OnInit {
  public name_show:string;
  public list:any;
  public seasons:string;

  constructor(
    // private _router: Router,
    private _route: ActivatedRoute,
    private _showService: ShowService,



  ) { 
this.name_show = '';
this.list = [];
this.seasons = '';
  }

  ngOnInit(): void {

    let id_show:number = -1;
    

    //tomar parametros de url
    this._route.params.subscribe((params:Params) => {
      console.log(params);
      id_show = params['id_show'];
      this.name_show = params['nombre']
      
    });

    //hacer peticion de lista de episodios en base a ese id
    
    this._showService.getListEpisodes(id_show).subscribe(result => {
       this.list = result;
       console.log(this.list);

    })






  
  
  }

}
