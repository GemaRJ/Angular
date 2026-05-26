import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conversor.html'

})
export class Conversor {

  cantidad = signal(0);

  moneda = signal('dolar');

  resultado = signal('');

  historial = signal<string[]>([]);

  convertir() {

    let total = 0;

    let texto = '';

    if (this.moneda() == 'dolar') {

      total = this.cantidad() * 1.08;

      texto = this.cantidad() + ' € son ' + total.toFixed(2) + ' dólares';

    }

    if (this.moneda() == 'libra') {

      total = this.cantidad() * 0.86;

      texto = this.cantidad() + ' € son ' + total.toFixed(2) + ' libras';

    }

    this.resultado.set(texto);

    this.historial.update(lista => [...lista, texto]);
  }
}