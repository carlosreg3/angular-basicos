//02 importamos el decorador component de angular
import {Component} from '@angular/core'

//03 le agregamos los atributos al decorador
@Component({
    selector:'app-contador',
    template:`
        <h1>{{titulo}}</h1>

        <h3>La base es: <strong>{{base}}</strong> </h3>
        <!--(click) es el evento click en angular, no funciona el +=, ademas no se aconseja tener logica dentro del template-->
        <!--<button (click)="numero=numero+1;">+1</button>-->
        <!--<button (click)="sumar()">+1</button>-->
        <button (click)="acumular(base)">+{{base}}</button>
        <span>{{numero}}</span>
        <!--<button (click)="numero=numero-1;">-1</button>-->
        <!--<button (click)="restar()">-1</button>-->
        <button (click)="acumular(-1*base)">-{{base}}</button>
    `
})
//01 creamos la clase del componente
export class ContadorComponent{
    titulo:string = 'Contador App';//Estas ropiedades permiten ser visualizadas en el hatml del componenete al cual apunta en nuestro ejemplo "app.component.html" usando las dobles llaves {{}}
    numero:number = 10;
    //agregammos metodos y los invocamos en la plantilla
    sumar(){
        this.numero+=1;
    }
    restar(){
        this.numero-=1;
    }

    base:number=5;
    //Resumimos los metodos anteriores en 1 solo con argumento
    acumular(valor:number){
        this.numero+=valor;
    }
}

//04agregar este componente a los modulos en app.modules.ts la seccion "declarations"