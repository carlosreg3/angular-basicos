//Los modulos cumplen 2 funciones principales
//- Encapsular las cosas
//- Ayuda con la carga pesesosa es decir si un usuario no usa un recurso no se carga, es decir cargar componentes bajo demanda

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //declarations: Lista de componentes del modulo
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //Lista de componentes que quiero hacer publicos y que se peuda ver fuera del modulo actual
    exports:[
        ListadoComponent
    ],
    //Lista de modulos a importar
    imports:[
        //CommonModule nos permite usar sentencias como *ngIf o *ngFor
        CommonModule
    ]
})
export class HeroesModule{

}