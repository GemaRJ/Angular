import { Component, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calorias',
  imports: [FormsModule],
  templateUrl: './calorias.html',
})
export class Calorias {

  alimento = signal('');

  calorias = signal('');

  total = signal(0);

  lista = signal<string[]>([]);

  agregar() {

    const numero = Number(this.calorias());

    if (
      this.alimento() === '' ||
      this.calorias() === '' ||
      numero <= 0
    ) {

      alert('Rellena los campos');

      return;
    }

    this.lista.update(lista => [
      ...lista,
      `${this.alimento()} - ${numero} kcal`
    ]);

    this.total.update(total => total + numero);

    this.alimento.set('');

    this.calorias.set('');
  }

}


