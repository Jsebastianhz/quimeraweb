import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './paginas/body/body.component';
import { SobremiComponent } from './paginas/sobremi/sobremi.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';


const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  },
  {
    path: 'sobremi',
    component: SobremiComponent
  },
  {
    path: 'contacto',
    component : ContactoComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

 