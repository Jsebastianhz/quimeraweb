import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BodyComponent } from './paginas/body/body.component';
import { SobremiComponent } from './paginas/sobremi/sobremi.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SobremiComponent,
    ContactoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
