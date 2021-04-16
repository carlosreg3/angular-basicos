import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//selector es el nombre del componente (existe una etiqueta dentro de index html)
  templateUrl: './app.component.html',//especificar el path del archivo html que va a ser utilzado en el componente
  //template:'<span>Carlo Ramos</span>',//es el html literal que se desea mostrar
  //tambien se peude usar un template con el simbolo ´´ para que te deje poner una plantilla multilinea
  //template:`
  //  <h1>Hola de nuevo</h1>
  //`,
  //styleUrls: ['./app.component.css']
}) 
export class AppComponent {
  
}
