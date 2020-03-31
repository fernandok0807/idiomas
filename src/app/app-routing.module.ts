import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from "./components/colors/colors.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { ColorsTestComponent } from "./components/colors-test/colors-test.component";
  

const routes: Routes = [
      {path:'', component:InicioComponent},
      {path:'colors', component:ColorsComponent},
      {path:'inicio', component:InicioComponent},
      {path:'colors-test', component:ColorsTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
