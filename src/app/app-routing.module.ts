import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PlaceAddPageModule } from './places/place-add/place-add.module';

const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'places',   /** Ruta Principal */
    children: [       /** Rutas Hijas */
      {
        path: '',     /** Path: /places */
        loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
      },
      {
        path: ':id',  /** Path: /places/:id donde 'id' es la parametrización de un dato en la ruta */
        loadChildren: () => import( './places/place-detail/place-detail.module' ) .then( m => m .PlaceDetailPageModule )        /** Lazy Loading: Ir Importanto a medida que se van requiriendo */
      }
    ]
  },
  { path: 'place-new', loadChildren: () => import( './places/place-add/place-add.module' ) .then( m => m .PlaceAddPageModule ) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
