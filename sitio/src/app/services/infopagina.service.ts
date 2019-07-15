import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

info: InfoPagina  = {};
cargada = false;
equipo:any[]; 
portafolio: any[];

  constructor( private http : HttpClient) { 

//console.log("page load");

this.cargarInfo();
this.cargarEquipo();
this.cargarPortafolio();



  }

private cargarInfo() {
	this.http.get('assets/data/data-pagina.json')
	.subscribe( (resp : InfoPagina) =>{
		this.cargada = true;
		this.info = resp;

  	
  	});
}

private cargarEquipo(){
	this.http.get('https://web-quimera.firebaseio.com/equipo.json')
	.subscribe( (resp:any[] ) =>{
		this.equipo =  resp;
  	
  	});
}



private cargarPortafolio(){
	this.http.get('https://web-quimera.firebaseio.com/portafolio.json')
	.subscribe( (resp:any[] ) =>{
		this.portafolio =  resp;
		console.log(resp);
  	
  	});
}

}
