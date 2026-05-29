import { Routes } from '@angular/router';
import { PaisesHomePageComponent } from './features/components/pages/paises-home-page/paises-home-page';
import { PaisesDetailPageComponent } from './features/components/pages/paises-detail-page/paises-detail-page';


export const routes: Routes = [
  { path: '', redirectTo: 'paises', pathMatch: 'full' },

  { path: 'paises', component: PaisesDetailPageComponent },
  { path: 'pais/:name', component: PaisesDetailPageComponent },

  { path: '**', redirectTo: 'paises' }
];
