import { Component,Input} from '@angular/core';
import {interface_Heroes} from "../interfaces/heroe.interface";
@Component({
  selector: 'heroeTarjetComponet',
  templateUrl: './heroeTarjetComponet.html',

})
export class heroeTarjetComponet {
// recibimo el valor de paises desde el otro componente
// importante poner el ! para que no nos marque el error 
@Input("data") data!:interface_Heroes;
constructor(){
}
 ngOnInit(): void {
 console.log("Data del heroe")
console.log(this.data)
  
 }
 

 
 
}
