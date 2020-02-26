import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places.service';
import { Place } from '../services/place.model';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  /** Atributes */
  public places: Place[] = [];

  constructor( private _placesService: PlacesService ) { }

  ngOnInit() {
    this.places = this ._placesService .getAll();
  }

}
