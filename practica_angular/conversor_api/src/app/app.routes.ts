import { Routes } from '@angular/router';
import { Conversor } from './components/conversor/conversor';

export const routes: Routes = [

  { path: 'conversor', component: Conversor },

  { path: '', redirectTo: 'conversor', pathMatch: 'full' }

];

