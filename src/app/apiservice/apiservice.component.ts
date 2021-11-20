import { Component, OnInit } from '@angular/core';
import { SomethingService } from '../services/something.service';

@Component({
  selector: 'apiservice',
  templateUrl: './apiservice.component.html',
  styleUrls: ['./apiservice.component.css'],
  providers: [SomethingService]
})
export class ApiserviceComponent implements OnInit {
  
  public paises:Array<any>;

  constructor(
    private _somethingService: SomethingService
  ) {
    this.paises = [];
   }

  ngOnInit(): void {
    //recibe la promesa enviada desde el servicio
    this._somethingService.getPaises().then(data => {
      this.paises = data;
    })
  }

}
