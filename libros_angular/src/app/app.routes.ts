import { Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listado',
    pathMatch: 'full'
  },
  {
    path: 'listado',
    component: ListadoComponent
  },
  {
    path: '**',
    redirectTo: 'listado'
  }
];

