import { Component, OnInit } from '@angular/core';
import { Place } from '../../services/place.model';             // Model
import { PlacesService } from '../../services/places.service';  // Service
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor( 
    private _placesService: PlacesService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  saveNewPlace( city: HTMLInputElement, place: HTMLInputElement, url: HTMLInputElement ) {
    
    console .group( 'Save' );
    console .log( city .value, '\n', place .value, '\n', url .value );
    console .groupEnd();

    /** Inserta datos en objeto tipo Place */
    const newPlace : Place = {
      id: this ._placesService .getQuantityRecords() + 1,
      city: city .value,
      name: place .value,
      urlImage: url .value,
      comments: []
    };

    console .log( 'New Place', newPlace );

    this ._placesService .add( newPlace );      // Guarda nuevo lugar
    this ._router .navigate( [ '/places' ] );   // Redirecciona

  }

}
