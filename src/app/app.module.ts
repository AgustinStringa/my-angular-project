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
