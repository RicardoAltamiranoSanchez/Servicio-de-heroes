// el type de nuestro tipo de dato en la respuesta de json en la base de datos en la
// pagina donde podemos hacer el tipado de nuestras interfaces https://app.quicktype.io/
// el ?: de indicamos que es opcional osea que puede venir o no 
export interface interface_Heroes {
   
        id:               string;
        superhero:        string;
        publisher:        Publisher;
        alter_ego:        string;
        first_appearance: string;
        characters:       string;
        alt_img?:         string;
      }
      
      export enum Publisher {
        DCComics = "DC Comics",
        MarvelComics = "Marvel Comics",
      }