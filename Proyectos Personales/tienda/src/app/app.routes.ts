import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Carrito } from './components/carrito/carrito';
import { Contacto } from './components/contacto/contacto';


export const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'productos', component: Inicio },
  { path: 'carrito', component: Carrito },
  { path: 'contacto', component: Contacto }
];