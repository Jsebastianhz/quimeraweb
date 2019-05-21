import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat, getLocaleDayNames } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  desarrollador = "Quimera It";
  fecha = getLocaleDateFormat;
  constructor() { }

  ngOnInit() {
  }

}
