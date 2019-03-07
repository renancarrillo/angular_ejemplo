import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	calificaciones: any;
	mostrar_calificaciones: boolean;
  title = 'Formulario';

  Nombre = "Renan";

  constructor(){
  		this.mostrar_calificaciones = true;
  		this.calificaciones = [10,9,8,8,7,6,8,9,"renan"];
  }

  verCal(){
  	this.mostrar_calificaciones = !this.mostrar_calificaciones;
  	console.log("Se presiono el boton");
  }


}
