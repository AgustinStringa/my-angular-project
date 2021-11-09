import { Component, OnInit, DoCheck, OnDestroy} from "@angular/core";

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
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public puntaje:number;
    public lista:Array<any>;
    public titulo:String;
    public visible:boolean;

    constructor(){
        console.log('constructorrr');
    this.puntaje  = 1000;
    this.lista = ["Minecraft", "Grand Theft Auto", "Pacman", "Mario Bros", "Doom eternal", "Wonder Boy"];
    this.titulo = 'Listado de videojuegos populares';
    this.visible = true;
    }

    //metodos
    public gameOver(){
        this.puntaje = 0;
    }

    public generarItems(){
        return this.lista.forEach(e => {
            `<li>${e}</li>`
        })
    }

    public alternarVisibilidad(){
        this.visible = !this.visible;
    }
    //HOOKS

    ngOnInit(): void {
        console.log('on-init ejecutadoo');
        setTimeout(()=> {
           this.puntaje = 100; 
        }, 5000);
    }
    //DO CHECK
    ngDoCheck(): void {
        console.log('DoCheck ejecutado');
    }
    //ON DESTROY
    ngOnDestroy(): void {
        console.log('onDestroy ejecutado');
    }
    



}