import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ShowService{
    public urlApi:string;
    constructor(
        public _http: HttpClient
    ){
        this.urlApi = 'https://api.tvmaze.com';
    }

    getShows(){       
        return (this._http.get(`${this.urlApi}/shows`))
    }

    getListEpisodes(id:number){
        return this._http.get(`${this.urlApi}/shows/${id}/episodes`);
    }
}