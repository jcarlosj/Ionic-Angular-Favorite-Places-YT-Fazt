import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';         // Router
import { PlacesService } from '../../services/places.service';    // Service
import { Place } from '../../services/place.model';               // Model
import { AlertController } from '@ionic/angular';                 // Componente de Ionic

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
    private _placesService: PlacesService,
    private _router: Router,
    private _ionAlertController: AlertController
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

  /** Elimina el lugar */
  async deletePlace() {
    /** Crea componente Alert de Ionic */
    const alertElement = await this ._ionAlertController .create({           // Es un método asíncrono. Hay que tratarlo como una promesa usando 'then' o 'async/await'
      header: 'Really, Do you want to delete it?',
      message: 'This action cannot be reversed.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'      // Cierra la ventana
        },
        {
          text: 'delete',
          handler: () => {
            /** Elimina lugar */
            console .log( 'Elimina', this .place );
            this ._placesService .delete( this .place.id );
            this ._router .navigate( [ '/places' ] );         // Redirecciona
          }
        }
      ]
    });

    await alertElement .present();    // Muestra el Componente en el DOM. También es un método asíncrono. 
  }

}
