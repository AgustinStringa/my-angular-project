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
  constructor(
    private _showService: ShowService
    
  ) { 
    
  }

  ngOnInit(): void {
    this._showService.getShows().subscribe(
      result => {this.shows = result;
      console.log(this.shows);
      })
  }

  loadEpisodeList(id:number){
    this._showService.getListEpisodes(id).subscribe(
      result => console.log(result)
    )
  }

}
