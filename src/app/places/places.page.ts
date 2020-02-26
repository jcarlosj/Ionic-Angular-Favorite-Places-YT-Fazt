import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places.service';     // Service
import { Place } from '../services/place.model';                // Model
import { Router } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  /** Atributes */
  public places: Place[] = [];

  constructor( 
    private _placesService: PlacesService,
    private _router: Router
  ) { }

  /** Método del Ciclo de Vida de Angular
   *  Se activa cuando inicializa el componente por primera vez. */
  ngOnInit() {
    console .log( 'ngOnInit' );
    this.places = this ._placesService .getAll();
  }

  /** Método del Ciclo de Vida de Ionic
   *  Se activa cuando el enrutamiento de componentes está a punto de animarse a la vista. */
  ionViewWillEnter () {
    console .log( 'ionViewWillEnter' );
    this .places = this.places = this ._placesService .getAll();
  }

  addNewPlace() {
    console .log( 'Works!' );
    this ._router .navigate( [ '/place-new' ] );   // Redirecciona
  }

  goToHomePage() {
    this ._router .navigate( [ '/home' ] );        // Redirecciona
  }

}
