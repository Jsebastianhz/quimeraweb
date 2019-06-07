import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BodyComponent } from './paginas/body/body.component';
import { SobremiComponent } from './paginas/sobremi/sobremi.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { PortafolioComponent } from './paginas/portafolio/portafolio.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SobremiComponent,
    ContactoComponent,
    FooterComponent,
    NosotrosComponent,
    PortafolioComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
