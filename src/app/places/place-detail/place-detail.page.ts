import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';               // Router
import { PlacesService } from '../../services/places.service';  // Service
import { Place } from '../../services/place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  /** Atributes */
  place: Place;

  constructor( 
    private _activatedRoute: ActivatedRoute,
    private _placesService: PlacesService
  ) { }

  ngOnInit() {
    /** Obtenemos los parametros pasados por la URL */
    this ._activatedRoute .paramMap .subscribe( param => {
      const id = param .get( 'id' );
      /** Obtiene datos del lugar */
      this .place = this ._placesService .getById( Number( id ) );
      console .log( 'Data', this .place );
    });
  }

}
