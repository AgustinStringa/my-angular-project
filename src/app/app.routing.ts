//importar modulos del router
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//importar componentes
import { EntradasComponent } from "./entradas/entradas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ShowsComponent } from "./shows/shows.component";

//array para rutas
const appRoutes:Routes = [
    {path: '', component:HomeComponent},
    {path: 'home', component:HomeComponent},
    {path:'blog', component:EntradasComponent},
    {path:'videojuegos', component:VideojuegoComponent},
    {path:'cursos', component:CursosComponent},
    //creando rutas para manipular parametros
    {path:'cursos/:nombre/:apellido', component:CursosComponent},
    {path:'shows', component:ShowsComponent},

    {path: '**', component:HomeComponent}

];
export const appRoutingProviders:any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);