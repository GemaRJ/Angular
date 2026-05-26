import { Routes } from '@angular/router';

import { Formulario } from './components/formulario/formulario';
import { Listado } from './components/listado/listado';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'formulario',
    pathMatch: 'full'
  },

  {
    path: 'formulario',
    component: Formulario
  },

  {
    path: 'listado',
    component: Listado
  }
];