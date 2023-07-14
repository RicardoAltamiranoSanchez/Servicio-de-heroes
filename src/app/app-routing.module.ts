import { NgModule } from '@angular/core';
// modulo para importar las rutas
import { RouterModule, Routes } from '@angular/router';
import {ErrorPaginaComponent } from './shared/404.component';
// creamos una constante importamos el module de Routes para poner los paths
const routes: Routes = [
  //  Creamos el path para nuestas rutas hijas
  //  debemos importar el loadChildren y importar toda la ruta
  //  y nos devuelve una promesa y retonarmos nuestro modulo para que nos lea nuestras rutas hijas
   
  {
    path:"Heroes",
    loadChildren:() => import('./heroes/heroes.module').then(h=> h.heroeModule)
    },
   {
   path:"Authenticacion",
   loadChildren:() => import('./autenticacion/autenticacion.module').then(m=> m.AutenticacionModule)
   },
   
   { 
   path:'404',
   component:ErrorPaginaComponent
   },{
   path:"**",
   redirectTo:'404'
   }
];

@NgModule({
//  Inicializamos nuestras rutas 
  imports: [RouterModule.forRoot(routes)],
  // exportamos nuestras rutas al modulo principal
  exports: [RouterModule]
    
  
})
export class AppRoutingModule { }
