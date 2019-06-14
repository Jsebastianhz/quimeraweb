import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './paginas/body/body.component';
import { SobremiComponent } from './paginas/sobremi/sobremi.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { PortafolioComponent } from './paginas/portafolio/portafolio.component';


const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'sobremi',
    component: SobremiComponent
  },
  {
    path: 'portafolio',
    component: PortafolioComponent
  },
  {
    path: 'contacto',
    component : ContactoComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

 