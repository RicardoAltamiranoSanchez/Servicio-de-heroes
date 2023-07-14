import { NgModule } from '@angular/core';
// modulo para importar las rutas
import { RouterModule, Routes } from '@angular/router';
import {listadoComponent} from './pages/listado/listado.component';
import {agregarComponent} from './pages/agregar/agregar.component';
import {buscarComponent} from './pages/buscar/buscar.component';
import {idHeroeComponent} from './pages/idHeroe/idHeroe.component';
import {inicioComponent} from './pages/Inicio/inicio.component';

//Creamos las rutas hijas con children dentro van a ir los paths de las rutas hijas
const routes: Routes = [
    {
        path: '',
        // Esta va se nuestra ruta padre y abajo son las rutas hijas
        // debemos poner <router-outlet></router-outlet> para que nos agarre las rutas hijas 
        component:inicioComponent,
        children: [
            {
                path: 'listado',
                component: listadoComponent
            }, {
                path: 'agregar',
                component: agregarComponent
            }, {
                path: 'listado/editar/:id',
                component: agregarComponent
            }, {
                path: 'buscar',
                component:buscarComponent
            }, {
                path: 'listado/informacion/:id',
                component:idHeroeComponent
            },
            {
                path: "**",
                redirectTo: 'listado'
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
export class heoresRoutingModule { }
