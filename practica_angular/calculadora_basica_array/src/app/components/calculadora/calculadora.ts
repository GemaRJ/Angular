import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

    this.historial.push(
      this.num1 +
      operacion +
      this.num2 +
      '=' +
      this.resultado
    );
  }
}