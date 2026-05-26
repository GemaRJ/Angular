import { Component, signal } from '@angular/core';

import { Calorias } from './components/calorias/calorias';

import { Listado } from './components/listado/listado';

@Component({
  selector: 'app-root',
  imports: [Calorias, Listado],
  templateUrl: './app.html',
})
export class App {

  pagina = signal('calorias');

}