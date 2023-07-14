import { Pipe, PipeTransform } from '@angular/core';
import {interface_Heroes} from "../interfaces/heroe.interface";

@Pipe({
  name: 'imagen' //indicamos como va estar nombre para mostrar en el template
})
export class heroesPipe implements PipeTransform {
// En value recibimos el valor desde el template donde vamos a ocupar nuestro pipe personalizado 
//indicamos que es de tipo de nuestra interfaz y de tipo string  
  transform(heroe:interface_Heroes):string{
  
  if(!heroe.alt_img && !heroe.id){
  
    return '../../../../assets/no-image.png'
  }
  
  if(heroe.alt_img) return heroe.alt_img
//   obtenemos la data desde el template y  retonarmos la ubicacion de la imagen
//   donde se encuentra 
  return `../../../../assets/heroes/${heroe.id}.jpg`
  }

}