import { Routes } from '@angular/router';

import { Conversor } from './components/conversor/conversor';

import { Listado } from './components/listado/listado';

export const routes: Routes = [

  { path: 'conversor', component: Conversor },

  { path: 'listado', component: Listado },

  { path: '', redirectTo: 'conversor', pathMatch: 'full' }

];