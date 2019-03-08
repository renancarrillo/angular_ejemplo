import { Component } from '@angular/core';
import { EjemploService } from './ejemplo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	calificaciones: any;
	mostrar_calificaciones: boolean;
	animales: any;
  title = 'Formulario';

  Nombre = "Renan";

  constructor(private servicio_animales: EjemploService){
  		this.mostrar_calificaciones = true;
  		this.calificaciones = [10,9,8,8,7,6,8,9,"renan"];
  }

  ngOnInit(){
  	this.servicio_animales.getAnimales().subscribe(data =>{
  		console.log(data);
      this.animales = data.animales;
      console.log(this.animales);
  	});
  }

  verCal(){
  	this.mostrar_calificaciones = !this.mostrar_calificaciones;
  	console.log("Se presiono el boton");
  }

  agregar(calificacion){
  	console.log(calificacion.value);
  	this.calificaciones.push(calificacion.value);
  	return false;
  }


}
