import { ContadorComponent } from './contador/contador.component';
import { NgModule } from '@angular/core';

@NgModule({
    //declarations: Lista de componentes del modulo
    declarations:[
        ContadorComponent,
    ],
    exports:[
        ContadorComponent
    ]
})
export class ContadorModule{

}