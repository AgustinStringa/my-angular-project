import { Component } from "@angular/core";

@Component({
    selector: 'Videojuego',
    templateUrl: './videojuego.component.html',
    styleUrls: ['./videojuego.component.css']
    // template: `<div><h2>Componente de videojuegos</h2>
    // <ul>
    // <li>Mario</li>
    // <li>GTA</li>
    // <li>Bakugan</li>
    // </ul>
    // <span></span>
    // </div>`
})
export class VideojuegoComponent {
    public puntaje:number = 0;
}