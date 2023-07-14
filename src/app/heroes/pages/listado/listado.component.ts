import { Component } from '@angular/core';
import { ServiceHeroes } from '../../Services/heroes.service';
import {interface_Heroes} from "../../interfaces/heroe.interface";
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles:[` 
  
  mat-card{
    margin-top:20px;
  
  }  
  `
]
})
export class listadoComponent {
  
constructor(private service:ServiceHeroes){}
Heroes:interface_Heroes[]=[];

ngOnInit(): void {
// mandamos a llamar nuestro servicio de la carpeta de service  
this.service.getHeroes().subscribe( response =>{
this.Heroes=response
})
}


}
