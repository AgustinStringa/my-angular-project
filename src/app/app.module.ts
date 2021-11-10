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

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    CursosComponent,
    MenuComponent,
    EntradasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //añadir modulo para data binding
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
