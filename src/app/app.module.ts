import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//Para la tarea hay que comentar el import
//import { ContadorComponent } from './contador/contador/contador.component';

//Hemos encapsulado HeroeComponent y ListadoComponent en HeroesModule por eso lo vamos a comentar
//import { HeroeComponent } from './heroes/heroe/heroe.component';
//import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  //En declarations se colocan los componentes creados
  declarations: [
    AppComponent,
    //Para la tarea hay que comentar el import
    //ContadorComponent,
    //Hemos encapsulado HeroeComponent y ListadoComponent en HeroesModule por eso lo vamos a comentar
    //HeroeComponent,
    //ListadoComponent
  ],
  //imports se importan otros modulos (carpetas de otros modulos)
  imports: [
    BrowserModule,
    //Agregamos nuestro HeroesModule, la finalidad es que crezcan los modulos personalizados y no el AppModule
    HeroesModule,
    ContadorModule
  ],
  //providers son servicios especificos a un modulo
  providers: [],
  //bootstrap es el componenete principal con el cual debe arrancar la aplicacion
  bootstrap: [AppComponent]
})
export class AppModule { }
