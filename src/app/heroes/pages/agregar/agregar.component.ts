import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// librerai para usar los mensaje de angular material debemos importar primero en lo 
// NgModule en los export el modulo import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSnackBar} from '@angular/material/snack-bar';
import { filter, switchMap } from 'rxjs';

import { Publisher, interface_Heroes } from '../../interfaces/heroe.interface';
import { ServiceHeroes } from '../../Services/heroes.service';
// Librerias para usar el modal dialog
import { MatDialog} from '@angular/material/dialog';
import { ModalDialogoComponent } from '../../components/ModalDialogo/ModalDialogo.component';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class agregarComponent {

  constructor(private ServicioHeroe:ServiceHeroes,
  
  // este sirve para trabajar sobre una ruta y poder trabajar con sus parametros
private rutas:ActivatedRoute,
//utiliza el Router por que no me agarra el navigate en ActivateRoute revisar eso
private ruta:Router,
// variable para poder usar el componente de mensaje
private snackBar :MatSnackBar,
// variabale para el modal dialogo
private dialogo_modal: MatDialog,


  ) { }
ngOnInit(): void {
// de decimos que si existe en el path o en la liga algo con el nombre de editar
// si no existe que nos retorne un nada
  if( !this.ruta.url.includes('editar') ) return;
// obtenemos los paramtros de la liga y usamos el id para mandar a llamar al servicio del heroid

this.rutas.params.pipe(
  switchMap( ({id}) => this.ServicioHeroe.getHeroeById(id)),
  ).subscribe( response =>{
    
    if(!response){
      this.ruta.navigateByUrl("/Heroes/listado")
      return;
    }
    // reseteamos el formulario y de ponemos los valores del objeto del heroe
    // deben coincidir con el mismo nombre que de pusimos en el formgroup
    // para que se puede hacer dinamica mente si no se haria conel setValue y poner el nombre
    // del componente
    this.heroFormulario.reset(response);
    return;
     })





}
// #Esto  seria un formulario reactivo  con FormGroup
// ya que adentro vamos a meter los componentes o campos que queremos hacer la validacion
// si uno de esto falla nos falla todo el formulario del grupo
// y dentro donde esta los compontes seria los componentes indivualmente
// del formulario con FormControl
  public heroFormulario = new FormGroup({
    // de metemos el tipo de dato con string 
    id: new FormControl<string>(''),
    // indicamos que no debe de ir nulo o vacio ya que cuando lo inciamos viene de tipo string | null
    superhero: new FormControl<string>('', { nonNullable: true }),
    // añadimos el tipo de dato dentro de con el publishe especifico
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>(''),
    first_appear: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    alt_img: new FormControl<string>(''),

  })
  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];
  
  // de ponemos el get por que vamos a retonar un hero y por eso es casting con el as
  // ya no ponemos los () para indicar que es una funcion seria un objeto de tipo heroe
  get obtenerHeroe():interface_Heroes{
  //  hacemos un casting de valor del formula ala interfaz con el as  para asegurarse de que el valor del formulario se ajuste a la interfaz "interface_Heroes". 
  const hero =this.heroFormulario.value as interface_Heroes;

  return hero;
  }
  submit():void{
  // cualquier de tipo observable en los servicio no se ejecutar si no se pone el susbcribe
  
  
  // de decimos si el formulario es valido si no , no hacemos nada
   if( this.heroFormulario.invalid) return;
   
   if(this.obtenerHeroe.id){
     // cualquier de tipo observable en los servicio no se ejecutar si no se pone el susbcribe para que nose me olvide
     this.ServicioHeroe.updateHero(this.obtenerHeroe)
     .subscribe(response => {
        this.ruta.navigate(["/Heroes/listado"]);
       this.openSnackBar(response.superhero,"Actualizado");
    })
    return;
    }
    this.ServicioHeroe.addNewHero(this.obtenerHeroe)     
    .subscribe(response => {
    
      this.ruta.navigate(["/Heroes/listado"]);
      this.openSnackBar(response.superhero,"Creado");
    })
    return;
   
    // console.log(this.heroFormulario.valid);
    // console.log("*********************");
    // console.log("*************************");
    // console.log(this.heroFormulario.value);
  }
  // hacemos una funcion que nos muestre el mensaje  primero va el mensaje y despues el boton y su nombre
  openSnackBar(message: string, action: string) {
    // asi es la sintaxis de componente de material grid
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
  Regresar():void{
    this.ruta.navigateByUrl("/Heroes/listado")
    }
    
    eliminarHeroe():void{
    
    if(!this.obtenerHeroe.id) throw Error("No existe este id de heroe");
      // hacemos una constante que nos sirve que nos devuelva la data de
      // para poder usarla en el modal o en el componente del modal
      // con open de indicamos el componente a que lo vamos a enviar
      // y el html que se va ejecutar en la data de indicamos lo que vamos a enviar al componente
      const dialogRef = this.dialogo_modal.open(ModalDialogoComponent, {
        data: this.obtenerHeroe
      });
  //en esta es cuando cerramos el boton lo que va hacer 
  // el result viene del otro componente llamado ModalDialogo
  // de esta funciones onNoClickFalse() onNoClickTrue()
  dialogRef.afterClosed()
      .pipe(
        //  indicamos que si el resultado solamente cuando el resultado es true pase ala
        //  siguiente validacion con el filter
        filter( (result: boolean) => result ),
        // hacemos el servicio de elimancion y nos devuelve un valor 
        switchMap( () => this.ServicioHeroe.deleteHero( this.obtenerHeroe.id )),
        // si el wasDeleted es false que pase ala siguiente subscribe
        filter( (wasDeleted: boolean) => wasDeleted ),
      )
      .subscribe(() => {
        this.ruta.navigate(['/Heroes/listado']);
        this.openSnackBar(this.obtenerHeroe.superhero,"Eliminacion");
      });

  
  // Ejemplo2
       // dialogRef.afterClosed().subscribe(result => {
    //   if ( !result ) return;

    //   this.heroesService.deleteHeroById( this.currentHero.id )
    //   .subscribe( wasDeleted => {
    //     if ( wasDeleted )
    //       this.router.navigate(['/heroes']);
    //   })
    // });
  }
}
