import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat, getLocaleDayNames } from '@angular/common';
import { InfopaginaService } from 'src/app/services/infopagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {



fecha : number = new Date().getFullYear();
  



  constructor( public servicio : InfopaginaService ) { }

  ngOnInit() {
  }

}
