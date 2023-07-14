import { NgModule } from '@angular/core';
import {autenticationModule } from './autenticacion-routing.module';
import { CommonModule } from '@angular/common';
import {LoginComponent } from './pages/login/login.component';
import { RegistroComponent} from './pages/registro/registro.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
   
  ],
  imports: [
    CommonModule,
    // lo importamos para poder usar el routerlink 
    autenticationModule
  ],
  exports:[ 
  ],
})
export class AutenticacionModule { }
