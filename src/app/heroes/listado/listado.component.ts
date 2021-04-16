//import { Component, OnInit } from '@angular/core';
import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
//export class ListadoComponent implements OnInit {
  export class ListadoComponent{

    heroes: string[]=['Spiderman','Ironman','Hulk','Thor','Capitán América']

    //heroeBorrado:string|undefined;
    //Alternativa 1
    heroeBorrado:string='';

    borrarHeroe():void{
      //console.log('borrando...');
      //this.heroes.splice(0,1);

      //también se puede borrar con shift
      //const heroeBorrado = this.heroes.shift();
      //this.heroeBorrado = this.heroes.shift();
      //Alternativa 1
      this.heroeBorrado = this.heroes.shift() || '';

      console.log(this.heroeBorrado);
    };

    
  /*
  constructor() { 
    console.log('constructor');
  }
  */

  //El ngOnInit normalmente se usa para inicializar objetos
  /*ngOnInit(): void {

    console.log('ngOnInit');
  }*/

}
