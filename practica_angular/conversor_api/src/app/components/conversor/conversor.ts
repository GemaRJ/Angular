import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Api } from '../../services/api';

@Component({
  selector: 'app-conversor',

  imports: [FormsModule],

  templateUrl: './conversor.html',

  styleUrl: './conversor.css'
})

export class Conversor {

  api = inject(Api);

  cantidad = signal(1);

  moneda = signal('');

  monedas = signal<string[]>([]);

  resultado = signal('');

  tasas: any = {};

  ngOnInit() {

    this.api.getMonedas().subscribe((datos: any) => {

      this.tasas = datos.rates;

      let lista = Object.keys(datos.rates);

      this.monedas.set(lista);

      if (lista.length > 0) {
        this.moneda.set(lista[0]);
      }

    });

  }

  convertir() {

    const valor = this.tasas[this.moneda()];

    if (valor) {

      const total = this.cantidad() * valor;

      this.resultado.set(
        `${this.cantidad()} € = ${total.toFixed(2)} ${this.moneda()}`
      );

    }

  }

}