import { Component } from '@angular/core';
import { ServiceHeroes } from '../../Services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import {interface_Heroes} from "../../interfaces/heroe.interface"
@Component({
  selector: 'app-idHeroe',
  templateUrl: './idHeroe.component.html',

})
export class idHeroeComponent {
public hero?:interface_Heroes;
constructor(
// este es para llamar nuestro servicio
private servicioHeroes:ServiceHeroes,
// este sirve para trabajar sobre una ruta y poder trabajar con sus parametros
private rutas:ActivatedRoute,
//utiliza el Router por que no me agarra el navigate en ActivateRoute revisar eso
private ruta:Router,

){}
ngOnInit(): void {
// utilizamos para obtener los parametros 
this.rutas.params.pipe(
  // mandamos a llamar el servicio y obtenemos los datos
  switchMap(  ({id}) => this.servicioHeroes.getHeroeById(id)),
  ).
  subscribe(hero =>{

// ya que tenemos los datos verificamos si es undefined para enviarlo ala lista principal ya despues lo guardamos en una variable 
if(!hero) return this.ruta.navigate(['/Heroes/listado']);
this.hero=hero;
console.log(hero);
return;

})

// this.servicioHeroes.getHeroeById()

}

Regresar():void{
this.ruta.navigateByUrl("/Heroes/listado")
}

}
