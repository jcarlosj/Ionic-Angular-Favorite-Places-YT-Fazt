import { Injectable } from '@angular/core';
import { Place } from './place.model';      /** Model */

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  /** Atributes */
  private places: Place[] = [
    { id: 1, city: 'Ipiales, Nariño', name: 'Santuario de Las Lajas', urlImage: 'https://i.pinimg.com/564x/e0/bf/8d/e0bf8d47beb3008dc7b18005a5250515.jpg', comments: [ 'Comentario 1', 'Comentario 2', 'Comentario 3' ] },
    { id: 2, city: 'Guatape, Antioquia', name: 'Piedra del Peñol', urlImage: 'https://i.pinimg.com/564x/df/77/ec/df77ecb4d2a19a65db55129594b7aee8.jpg', comments: [ 'Comentario 1', 'Comentario 2', 'Comentario 3' ] },
    { id: 3, city: 'Salento, Quindio', name: 'Valle del Cocora', urlImage: 'https://i.pinimg.com/564x/7e/29/94/7e29942423f67fa68a43796efd736543.jpg', comments: [ 'Comentario 1', 'Comentario 2', 'Comentario 3' ] }
  ];

  constructor() { }

  /** Retorna una copia del Array de Lugares */
  getAll() : Place[] {
    return [ ...this .places ];   // Devuelve una Copia del Arreglo original
  }

  /** Busca por ID y retorna un objeto */
  getById( id: number ) : Place {
    return {
      ...this .places .find( place => {
        return place .id === id;
      })
    }
  }

  /** Agrega un nuevo lugar */
  add( place: Place ) {
    this .places .push( place );
  }

  /** Elimina un lugar existente */
  delete( id:number ) {
    this .places = this .places .filter( place => {
      return place .id !== id;
    });
  }

}
