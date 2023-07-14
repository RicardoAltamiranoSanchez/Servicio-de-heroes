import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {interface_Heroes} from "../interfaces/heroe.interface"
import { Observable,catchError,map,of } from "rxjs";
import { variable } from '../../../environments/environments';
@Injectable({
providedIn:"root"
})
export class ServiceHeroes{
private baseUrl:string=variable.baseUrl;
public hero ?:string;
constructor(private serviceHeroes:HttpClient){}


// de indicamos que es de tipo observable
getHeroes():Observable<interface_Heroes[]>{
// importamos el HttpClient para hacer nuestra peticinoo get y para que se ocupe en nuestro archivo de lista 
// indicamos que es de tipo de nuestra interfaz de un arreglo para que nos tipe la respuesta 

return this.serviceHeroes.get<interface_Heroes[]>(`${this.baseUrl}/heroes`);
 }
// retornamos un id de tipo string o undefine ya que nos puede marcar un error y debemos retonar algo
// y usamos el of para convertirlo en un observable
getHeroeById(id:string ):Observable <interface_Heroes | undefined>{

return this.serviceHeroes.get<interface_Heroes>(`${this.baseUrl}/heroes/${id}`)

.pipe(
// con el catchError agarramos el erro y luedo convertimos ese error en un tipo undefined de tipo observable 
// lo convertimos con el of eso se usa para convertira un dato en un observable
catchError(error => of(undefined))
);

}
getSugerencias(query: string): Observable<interface_Heroes[]>{

return this.serviceHeroes.get<interface_Heroes[]>(`${this.baseUrl}/heroes?${query}=a&_limit=6`);
}

addNewHero(hero:interface_Heroes):Observable <interface_Heroes >{
    return this.serviceHeroes.post<interface_Heroes>(`${this.baseUrl}/heroes`,hero);
}

updateHero(hero:interface_Heroes):Observable <interface_Heroes >{
//   hacemos una validacion que debe ir el hero si no que nos mande un mensaje
   if(!hero){throw Error ("El hero es requerido")}
    return this.serviceHeroes.patch<interface_Heroes>(`${this.baseUrl}/heroes/${hero.id}`,hero);
}

deleteHero(id:string):Observable<boolean>{
    return this.serviceHeroes.delete<interface_Heroes>(`${this.baseUrl}/heroes/${id}`)
    // dentro de pipe va la configuracion ya que tenemos el objeto
    // hacemos si no marca un error que nos devuelve false si no es 200 un true
    .pipe(
    map(resp =>  true),
        catchError(error => of(false)),
    );
}
}