import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importacion para data binding
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { MenuComponent } from './menu/menu.component';
import { EntradasComponent } from './entradas/entradas.component';
//importacion para rutas
import { routing, appRoutingProviders } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ApiserviceComponent } from './apiservice/apiservice.component';
import { ShowsComponent } from './shows/shows.component';

//importaciones para peticiones
import {HttpClientModule} from '@angular/common/http';
//importando pipe personalizada
import { CalculatorPipe } from './pipes/calculadora.pipe';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';
import { FlyingHeroesPipe } from './pipes/flying-heroes-pipes';
import { EpisodiosComponent } from './episodios/episodios.component';


@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    CursosComponent,
    MenuComponent,
    EntradasComponent,
    HomeComponent,
    ApiserviceComponent,
    ShowsComponent,
    //importando pipe personalizada
    CalculatorPipe,
    FlyingHeroesComponent,
    FlyingHeroesPipe,
    EpisodiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //añadir modulo para data binding
    FormsModule,
    //modulo para rutas
    routing,
    //importacion para peticiones
    HttpClientModule
  ],
  providers: [
    //servicio para rutas
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
