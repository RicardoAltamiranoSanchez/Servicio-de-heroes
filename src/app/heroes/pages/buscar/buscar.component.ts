import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interface_Heroes } from '../../interfaces/heroe.interface';
import { ServiceHeroes } from '../../Services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',

})
export class buscarComponent {
  constructor(  private servicioHeroes:ServiceHeroes,){ }
  
  // el new formControl es un formulario reactivo y sirve para poder tener el controlo 
  // dentro de un input ver su valores o si fue modifcado 
  public controlFormulario=new FormControl('');
  public heroes:interface_Heroes[]=[];
  public selectHero?:interface_Heroes;


buscarHeroe():void{
// indicamos que si nos devuelve un valor nulo o si no existe que nos devuelva un string vacio
const query: string  =this.controlFormulario.value || '';
this.servicioHeroes.getSugerencias(query)
// obtenemos el valor y lo guardamos a heros para mostrarlo en la vista y si no existe que nos mueste en un arreglo
// vacio ya que nos puede marcar un error
.subscribe(h => {
  //  if(!h) this.heroes=[];
    this.heroes = h 
})
}
seleccionarOpcion(e:MatAutocompleteSelectedEvent):void{
  // MatAutocompleteSelectedEvent es el tipo de interfaz que debemos meter
  // para cuando usemos el autocompletado de material grid
if(!e.option.value){
return;
}  
// recibimos el valor del evento y luego se lo asignamos al formulario
// para que se muestre en la caja y lo añadimos en la variable de selectHero
// para poder mostrarlo individualmente
const valor:interface_Heroes=e.option.value
this.controlFormulario.setValue(valor.superhero);
this.selectHero=valor;
}

}
