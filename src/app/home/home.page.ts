import { Component, OnInit } from '@angular/core';
import { ApiPhotosService } from '../services/api-photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  /** Atributes */
  photos : Object[] = [];

  constructor( private _apiPhotosService: ApiPhotosService ) {}

  ngOnInit() {
    this ._apiPhotosService .getPhotos()
      .subscribe( data => {
        this .photos = data;
        console .log( 'API Data', this .photos );
      });
  }

}
