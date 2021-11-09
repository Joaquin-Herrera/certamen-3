import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AraucaniaComponent } from './araucania/araucania.component';
import { BioBioComponent } from './bio-bio/bio-bio.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MenuComponent } from './menu/menu.component';
import { MetropolitanaComponent } from './metropolitana/metropolitana.component';
import { ValparaisoComponent } from './valparaiso/valparaiso.component';

const routes: Routes = [
  {path:"valparaiso", component:ValparaisoComponent},
  {path:"metropolitana", component:MetropolitanaComponent},
  {path:"bio-bio",component:BioBioComponent},
  {path:"araucania",component:AraucaniaComponent},
  {path:"edit/:id",component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
