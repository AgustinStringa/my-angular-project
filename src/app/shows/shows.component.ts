import { Component, OnInit } from '@angular/core';
import { ShowService } from '../services/show.service';


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
    private _showService: ShowService
    
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
    }, 5000)

    
  }

  loadEpisodeList(id:number){
    this._showService.getListEpisodes(id).subscribe(
      result => console.log(result)
    )
  }

}
