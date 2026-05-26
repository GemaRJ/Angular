import {
  Component,
  inject,
  signal
} from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Datos } from '../../services/datos';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html'
})
export class Formulario {

  datosService = inject(Datos);

  producto = signal('');
  precio = signal(0);
  cantidad = signal(0);
  stock = signal('');

  guardar() {

    if (
      this.producto() === '' ||
      this.precio() <= 0
    ) {
      alert('Debes rellenar los datos');
      return;
    }

    this.datosService.lista.update(lista => [

      ...lista,

      {
        producto: this.producto(),
        precio: this.precio(),
        cantidad: this.cantidad(),
        stock: this.stock()
      }

    ]);

    this.producto.set('');
    this.precio.set(0);
    this.cantidad.set(0);
    this.stock.set('');

  }

}

