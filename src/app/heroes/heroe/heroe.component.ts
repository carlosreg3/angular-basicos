import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    nombre:string='Ironman';
    edad:number = 45;

    //vamos a crear un getter para devolver el capitalizado 
    get NombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        
        //return this.nombre + ' - ' + this.edad;

        //Lo anterior mejor lo hago con backtip ` porque sirve para crear templates
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre='Spiderman';
    }

    cambiarEdad():void{
        this.edad=30;
    }
}