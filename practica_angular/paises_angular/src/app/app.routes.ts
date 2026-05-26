import { Routes } from '@angular/router';
import path from 'path';
import { Pais } from './components/pais/pais';


export const routes: Routes = [

  { path: '', redirectTo: 'pais', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'pais' } 
];