import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './paginas/body/body.component';
import { SobremiComponent } from './paginas/sobremi/sobremi.component';

const routes: Routes = [
  {path:'', component:BodyComponent},
  {path:'sobremi', component:SobremiComponent},
  {path:'**', pathMatch:'full', redirectTo: '/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
