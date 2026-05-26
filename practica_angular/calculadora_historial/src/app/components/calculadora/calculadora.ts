import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Operaciones } from '../../services/operaciones';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {

  num1: number = 0;
  num2: number = 0;

  resultado: number = 0;

  historial: string[] = [];

  constructor(public operacionesService: Operaciones) {}

  calcular(operacion: string) {

    if (operacion == '+') {
      this.resultado = this.num1 + this.num2;
    }

    if (operacion == '-') {
      this.resultado = this.num1 - this.num2;
    }

    if (operacion == '*') {
      this.resultado = this.num1 * this.num2;
    }

    if (operacion == '/') {
      this.resultado = this.num1 / this.num2;
    }

    let texto =
      this.num1 +
      operacion +
      this.num2 +
      '=' +
      this.resultado;

    this.historial.push(texto);

    this.operacionesService.historial.push(texto);
  }
}


