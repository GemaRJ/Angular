import { Routes } from '@angular/router';
import { Moneda } from './components/moneda/moneda';

export const routes: Routes = [
  { path: 'conversor', component: Moneda },
  { path: '', redirectTo: 'conversor', pathMatch: 'full' },
  { path: '**', redirectTo: 'conversor' },
];