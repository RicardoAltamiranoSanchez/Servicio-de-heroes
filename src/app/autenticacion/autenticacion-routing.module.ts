import { NgModule } from '@angular/core';
// modulo para importar las rutas
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent } from './pages/login/login.component';
import {RegistroComponent} from './pages/registro/registro.component';

//Creamos las rutas hijas con children dentro van a ir los paths de las rutas hijas
const routes: Routes = [
   {
   path:'',
   children:[
   { 
   path:'Login',
   component:LoginComponent
   },{
    path:'Registro',
    component:RegistroComponent
   },{
   path:"**",
   redirectTo:'Login'
   }
  ]
}
];

@NgModule({
//  Inicializamos nuestras rutas 
//con forChild inicializamos nuestra rutas hijas

  imports: [RouterModule.forChild(routes)],
  // exportamos nuestras rutas al modulo principal
  exports: [RouterModule],
})
export class autenticationModule { }
