import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { interface_Heroes } from '../../interfaces/heroe.interface';
@Component({
  selector: 'app-ModalDialogo',
  templateUrl: './ModalDialogo.component.html',
  styleUrls: ['./ModalDialogo.component.css']
})
export class ModalDialogoComponent {

  constructor(
  // esto es propio de material grid  en MatDialogRef solo de indicamos la etiqueta que va ser la misma 
  // de nuestra clase recibimos la data y de asignamos el tipo de interfaz
    public dialogRef: MatDialogRef<ModalDialogoComponent >,
    @Inject(MAT_DIALOG_DATA) public data: interface_Heroes ,
  ) {}
 
//  hamemos funciones de tipo click para una de los botones con el close de dialoRefe
//  enviamos los valores al componente que va ejecutar la logica y donde inciamos el modal
  onNoClickFalse(): void {
    this.dialogRef.close(false);
  }
  onNoClickTrue(): void {
    this.dialogRef.close(true);
  }
}
