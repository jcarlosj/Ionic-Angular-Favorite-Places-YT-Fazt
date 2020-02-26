import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiPhotosService {

  constructor( private _httpClient: HttpClient ) { }

  getPhotos() {
    return this ._httpClient .get( 'https://jsonplaceholder.typicode.com/photos?_limit=20' );
  }

}
