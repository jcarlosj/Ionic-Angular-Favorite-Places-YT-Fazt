import { Component, OnInit } from '@angular/core';
import { ApiPhotosService } from '../services/api-photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private _apiPhotosService: ApiPhotosService ) {}

  ngOnInit() {
    this ._apiPhotosService .getPhotos()
      .subscribe( data => {
        console .log( 'API Data', data );
      });
  }

}
