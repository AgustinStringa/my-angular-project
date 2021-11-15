import { Injectable } from "@angular/core";

@Injectable()
export class SomethingService{
    public urlApi:string;
    
    constructor(){
        this.urlApi = 'https://restcountries.com/v3.1/all';
    }

    getPaises(){
        return fetch(this.urlApi).then(data => data.json())        
    }
}