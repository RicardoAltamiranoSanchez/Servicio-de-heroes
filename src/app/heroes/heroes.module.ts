import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { listadoComponent } from './pages/listado/listado.component';
import { idHeroeComponent } from './pages/idHeroe/idHeroe.component';
import { buscarComponent } from './pages/buscar/buscar.component';
import { agregarComponent } from './pages/agregar/agregar.component';
import { inicioComponent } from './pages/Inicio/inicio.component';
import { heoresRoutingModule } from './heroes-routing.module';
import {heroeTarjetComponet} from '../heroes/components/heroeTarjetComponet'
// importamos el modulo de flex layout
import { FlexLayoutModule } from '@angular/flex-layout';
// importamos el modulo de material angular 
import { MaterialModule} from '../material/material.module'
//importamos nuestro Pipe personalizado
import {heroesPipe} from './pipes/heroesPipe.pipe'

//modulo que nos sirve para ocupar los formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    listadoComponent,
    idHeroeComponent,
    buscarComponent,
    agregarComponent,
    inicioComponent,
    heroeTarjetComponet,
    heroesPipe,
  ],
  imports: [   
    // lo importamos para poder usar el routerlink 
    CommonModule,
    heoresRoutingModule, 
    FlexLayoutModule ,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [


  ]
})
export class heroeModule {
}
