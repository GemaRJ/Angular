import { Component, inject } from '@angular/core';

import { Datos } from '../../services/datos';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.html'
})
export class Listado {

  datosService = inject(Datos);

}