import { NgModule } from '@angular/core';
// modulo para la navegacion en general
import {MatSidenavModule} from '@angular/material/sidenav';
// modulo para el toobbar oseala nva
import {MatToolbarModule} from '@angular/material/toolbar';
// modulo para iconos
import {MatButtonModule} from '@angular/material/button';
// modulo para icono
import {MatIconModule} from '@angular/material/icon';
// Modulo para lista 
import {MatListModule} from '@angular/material/list';
// Modulo para las cards
import {MatCardModule} from '@angular/material/card';
//modulo para el auto completado de material
import {MatAutocompleteModule} from '@angular/material/autocomplete';

//importamos el modulo para usar los componentes de material grid
import {MatGridListModule} from '@angular/material/grid-list';
///modulo para los inputs de material 
import { MatInputModule } from '@angular/material/input';
//modulo para el spinner de material grid
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// Aqui va los componentes de material grid
//modulo para agregar el  select de material
import {MatSelectModule} from '@angular/material/select';
// Modulo para agregar el mensaje y poder usar el import {MatSnackBar} from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
//Modulo para utilizar el modal de dialogo
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({

  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatAutocompleteModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatSelectModule,  
    MatSnackBarModule,
    MatDialogModule
    
  ]
})
export class MaterialModule {
}
